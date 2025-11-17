"use client";
import { ThemeContext } from "./app-theme-provider";
import { useContext, useActionState, useOptimistic, useEffect } from "react";
import { saveThemePreference } from "./actions";

export default function AppContainer({ children, initialTheme }) {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  // useActionState for form submission
  const [state, formAction, isPending] = useActionState(saveThemePreference, {
    theme: initialTheme,
    success: false,
    error: null
  });

  // useOptimistic for instant UI updates
  const [optimisticTheme, setOptimisticTheme] = useOptimistic(
    state.theme,
    (currentTheme, newTheme) => newTheme
  );

  // Sync optimistic theme with context
  useEffect(() => {
    const isDark = optimisticTheme === 'dark' ||
      (optimisticTheme === 'auto' && new Date().getHours() >= 18);
    setDarkTheme(isDark);
  }, [optimisticTheme, setDarkTheme]);

  const className = darkTheme
    ? "container bg-dark text-light m-4 w-auto"
    : "container bg-light text-dark m-4 w-auto";

  const handleFormAction = async (formData) => {
    const newTheme = formData.get('theme');
    // Optimistically update the theme immediately
    setOptimisticTheme(newTheme);
    // Submit to server
    await formAction(formData);
  };

  return (
    <div className={className}>
      <form action={handleFormAction} className="mb-3">
        <div className="d-flex align-items-center gap-3">
          <label htmlFor="themeSelect" className="form-label mb-0">
            Theme:
          </label>
          <select
            name="theme"
            id="themeSelect"
            className="form-select form-select-sm w-auto"
            defaultValue={optimisticTheme}
            disabled={isPending}
          >
            <option value="light">☀️ Light Mode</option>
            <option value="dark">🌙 Dark Mode</option>
            <option value="auto">🌓 Auto (Evening)</option>
          </select>
          <button
            type="submit"
            className="btn btn-sm btn-primary"
            disabled={isPending}
          >
            {isPending ? 'Saving...' : 'Save Theme'}
          </button>
          {state.success && (
            <span className="text-success small">✓ {state.message}</span>
          )}
          {state.error && (
            <span className="text-danger small">✗ {state.error}</span>
          )}
        </div>
      </form>
      <hr />
      <div>{children}</div>
    </div>
  );
}
