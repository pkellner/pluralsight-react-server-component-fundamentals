"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export const QueryContext = createContext<{
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}>({
  query: "",
  setQuery: () => {},
});

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}
