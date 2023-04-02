"use client";

import Boundary from "@/lib/boundary";
import React, { useContext } from "react";
import { QueryContext } from "@/src/app/contexts/query-provider";

export default function SessionsQuery() {
  const { query, setQuery } = useContext(QueryContext);

  return (
    <form>
      <div className="input-group mb-1 mt-2">
        <Boundary isServerComponent={false}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Boundary>
      </div>
    </form>
  );
}
