"use client";

import { ThemeContext } from "./app-context";
import { useContext } from "react";

export default function AppContainer({ children }) {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div
      className={`container ${
        darkTheme ? "bg-dark text-light" : "bg-light text-dark"
      } `}
    >
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkThemeSwitch"
          checked={darkTheme}
          onChange={handleThemeChange}
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
