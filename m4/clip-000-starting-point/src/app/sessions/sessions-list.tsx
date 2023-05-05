import 'server-only';

import {SessionData} from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";
import sessionsData from "../../../data/sessions.json";

export default function SessionsList() {
  return (
    <div className="container">
      <div className="row">
        {sessionsData.data.sessions?.map(function (rec: SessionData) {
          return <SessionListItem key={rec.id} rec={rec} />;
        })}
      </div>
    </div>
  );
}
