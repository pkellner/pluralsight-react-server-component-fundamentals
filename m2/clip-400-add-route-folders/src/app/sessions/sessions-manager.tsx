import "server-only";

import SessionsQuery from "./sessions-query";
import SessionsList from "./sessions-list";
import Boundary from "@/lib/boundary";
import React, {Suspense} from "react";
import SessionsListLoading from "@/src/app/sessions/sessions-list-loading";

export default function SessionsManager() {
  return (
    <Boundary isServerComponent={true}>
      <div className="bg-white">
        <SessionsQuery />
        <Suspense fallback={<SessionsListLoading />}>
          <SessionsList />
        </Suspense>
      </div>
    </Boundary>
  );
}
