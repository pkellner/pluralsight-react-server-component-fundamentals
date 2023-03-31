import React, {useState} from "react";
import SessionsQuery from "./sessions-query";
import SessionsList from "./sessions-list";
import Boundary from "@/lib/boundary";


export default function SessionsManager({ sessionData, youTubeData }) {
  const [query, setQuery] = useState<string>("");

  return (
    <Boundary>
      <div className="container py-4">
        <SessionsQuery   query={query} setQuery={setQuery}/>
        <SessionsList sessionData={sessionData} youTubeData={youTubeData} query={query} />
      </div>
    </Boundary>
  );
}
