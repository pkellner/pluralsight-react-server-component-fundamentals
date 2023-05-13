import 'server-only';
import {SessionData} from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";
import SessionListItemClient from
  "@/src/app/sessions/session-list-item-client";

const delay = (ms: number) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);

async function getSessionsList() {
  await delay(3000);
  const res = await fetch(`http://localhost:3000/api/sessiondata?max=11`);
  if (!res.ok) { throw new Error("failed to fetch data"); }
  const data = await res.json();
  return data;
}

export default async function SessionsList() {
  const sessionsData = await getSessionsList();
  return (
    <div className="container">
      <div className="row">
        {sessionsData.map(function (rec: SessionData) {
          return (
            <SessionListItemClient key={rec.id} title={rec.title} >
              <SessionListItem rec={rec} />
            </SessionListItemClient>
          );
        })}
      </div>
    </div>
  );
}
