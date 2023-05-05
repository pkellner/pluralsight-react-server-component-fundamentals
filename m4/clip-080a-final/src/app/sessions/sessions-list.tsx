import "server-only";

import { SessionData } from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";

import sessionsData from "../../../data/sessions.json";
import { Suspense } from "react";
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import GradientRectangle from "@/lib/gradient-rectangle";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionsList() {
  await delay(5000);
  const res = await fetch(`http://localhost:3000/api/sessiondata?max=9`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

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
