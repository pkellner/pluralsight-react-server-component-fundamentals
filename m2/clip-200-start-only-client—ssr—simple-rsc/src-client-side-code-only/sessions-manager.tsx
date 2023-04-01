import React, { useState } from "react";
import SessionsQuery from "./sessions-query";
import SessionsList from "./sessions-list";
import Boundary from "@/lib/boundary";
import { ISessionData } from "@/lib/ts-interfaces";

export default function SessionsManager({
  sessionData,
}: {
  sessionData?: ISessionData[];
}) {
  const [query, setQuery] = useState<string>("");

  return (

      <Boundary>
        <div className="bg-white">
          <SessionsQuery query={query} setQuery={setQuery} />
          <SessionsList sessionData={sessionData} query={query} />
        </div>
      </Boundary>

  );
}
