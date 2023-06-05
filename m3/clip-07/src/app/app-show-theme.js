"use client";

import { ThemeContext } from "./app-theme-provider";
import { useContext } from "react";

export default function AppShowTheme() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return <div>{darkTheme ? "Dark" : "Light"} theme</div>;
}
