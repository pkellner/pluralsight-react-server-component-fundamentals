import "server-only";

import SessionsQuery from "./sessions-query";
import SessionsList from "./sessions-list";
import {ISessionData} from "@/lib/ts-interfaces";
import Boundary from "@/lib/boundary";

export default function SessionsManager({
  sessionData,
}: {
  sessionData?: ISessionData[];
}) {

  return (

      <Boundary isServerComponent={true}>
        <div className="bg-white">
          <SessionsQuery  />
          <SessionsList  />
        </div>
      </Boundary>

  );
}
