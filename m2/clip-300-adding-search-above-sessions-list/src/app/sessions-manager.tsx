import "server-only";

import SessionsQuery from "./sessions-query";
import SessionsList from "./sessions-list";
import { ISessionData } from "@/lib/ts-interfaces";
import Boundary from "@/lib/boundary";
import React, {Suspense, useContext} from "react";
import SessionsListLoading from "@/src/app/sessions-list-loading";


export default function SessionsManager({
  sessionData,
}: {
  sessionData?: ISessionData[];
}) {

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
