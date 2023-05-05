import "server-only";

import { SessionData } from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";

import sessionsData from "../../../data/sessions.json";
import { Suspense } from "react";
import ShowBusyIndicator from "@/lib/show-busy-indicator";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionsList() {
  await delay(2000);
  const res = await fetch(`http://localhost:3000/api/sessiondata?max=11`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

function SessionListLoading() {
  return (
    <div className="container">
      <div className="row">
        {[1, 2, 3, 4].map(function (id: number) {
          return (
            <div className="col-12 " key={id}>
              <ShowBusyIndicator />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default async function SessionsList() {
  const sessionData = await getSessionsList();
  return (
    <Suspense fallback={<SessionListLoading />}>
      <div className="container">
        <div className="row">
          {sessionData.map(function (rec: SessionData) {
            return <SessionListItem key={rec.id} rec={rec} />;
          })}
        </div>
      </div>
    </Suspense>
  );
}
