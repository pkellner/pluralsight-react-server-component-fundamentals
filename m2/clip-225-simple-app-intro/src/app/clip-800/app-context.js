"use client";

import { createContext, ReactNode, useState } from "react";

// not sure why we need to initialize here for typescript. I think that they just establish the types. The init value comes from the useState calls.
export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      <>{children}</>
    </ThemeContext.Provider>
  );
}
