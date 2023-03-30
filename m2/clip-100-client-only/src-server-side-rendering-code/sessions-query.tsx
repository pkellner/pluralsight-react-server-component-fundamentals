import Boundary from "@/lib/boundary";
import React from "react";

export default function SessionsQuery({ query, setQuery }) {
  return (
    <form>
      <div className="input-group mb-3">
        <Boundary enabled={true}>
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
