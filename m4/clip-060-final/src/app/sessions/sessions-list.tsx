import 'server-only';

import {SessionData} from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";

import sessionsData from "../../../data/sessions.json";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionsList() {
  await delay(2000);
  return sessionsData.data.sessions;
}

// async function getSessionsList() {
//   await delay(2000);
//   const res = await fetch(`http://localhost:3000/api/sessiondata?max=11`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// }

export default async function SessionsList() {
  const sessionData = await getSessionsList();
  return (
    <div className="container">
      <div className="row">
        {sessionData.map(function (rec: SessionData) {
          return <SessionListItem key={rec.id} rec={rec} />;
        })}
      </div>
    </div>
  );
}
