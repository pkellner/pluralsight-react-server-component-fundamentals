import "server-only";

import React from "react";
import {SessionData} from "@/lib/ts-interfaces";
import SessionListItemClient from "@/src/app/sessions/session-list-item-client";
import SessionListItem from "@/src/app/sessions/session-list-item";

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
        {sessionData.map(function (
          rec: SessionData,
          children: React.ReactNode
        ) {
          return (
            <SessionListItemClient key={rec.id} title={rec.title}>
              <SessionListItem rec={rec} />
            </SessionListItemClient>
          );
        })}
      </div>
    </div>
  );
}
