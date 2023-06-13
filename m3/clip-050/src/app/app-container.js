"use client";
import { ThemeContext } from "./app-theme-provider";
import { useContext } from "react";
export default function AppContainer({ children }) {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const className = darkTheme
    ? "container bg-dark text-light m-4 w-auto"
    : "container bg-light text-dark m-4 w-auto";

  return (
    <div className={className}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkThemeSwitch"
          checked={darkTheme}
          onChange={() => setDarkTheme(!darkTheme)}
        />
        <label className="form-check-label" htmlFor="darkThemeSwitch">
          Enable Dark Theme
        </label>
      </div>
      <hr />
      <div>{children}</div>
    </div>
  );
}
