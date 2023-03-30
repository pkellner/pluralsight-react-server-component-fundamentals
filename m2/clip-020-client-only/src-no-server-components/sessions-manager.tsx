import React, { useState } from "react";
import Boundary from "../lib/boundary";
import SessionsQuery from "./sessions-query";
import SessionsList from "./sessions-list";




export default function SessionsManager({ sessionData }) {
  const [query, setQuery] = useState<string>("");

  return (
    <Boundary>
      <div className="container py-4">
        <SessionsQuery   query={query} setQuery={setQuery}/>
        <SessionsList sessionData={sessionData} query={query} />
      </div>
    </Boundary>
  );
}
