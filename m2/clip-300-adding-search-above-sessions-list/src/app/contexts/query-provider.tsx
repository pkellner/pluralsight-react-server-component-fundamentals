"use client";

import {createContext, ReactNode, useState} from "react";
import Boundary from "@/lib/boundary";

export type QueryContent = {
  query: string;
  setQuery: (c: string) => void;
};

// not sure why we need to initialize here for typescript. I think that they just establish the types. The init value comes from the useState calls.
export const QueryContext = createContext<QueryContent>({
  query: "",
  setQuery(string): void {},
});

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");
  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      <Boundary isServerComponent={false}  borderCustom={false}  >{children}</Boundary>
    </QueryContext.Provider>
  );
}
