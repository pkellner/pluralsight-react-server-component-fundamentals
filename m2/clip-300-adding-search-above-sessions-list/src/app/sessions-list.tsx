import "server-only";

export const dynamic = "force-dynamic";

import Boundary from "@/lib/boundary";
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import { ISessionData } from "@/lib/ts-interfaces";
import SessionVideo from "./session-video";
import { ReactNode, Suspense } from "react";
import SessionVideoLoading from "@/src/app/session-video-loading";
import SessionListItem from "@/src/app/session-list-item";
import SessionListItemClientWrapper from "@/src/app/session-list-item-client-wrapper";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionsList() {
  await delay(2000);
  const res = await fetch(`http://localhost:3000/api/sessiondata`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function SessionsList() {
  const sessionData = await getSessionsList();

  if (!sessionData) {
    return <ShowBusyIndicator />;
  }

  const query = "";

  return (
    <ul className="list-group">
      {sessionData
        .filter((rec: ISessionData) =>
          rec.title.toLowerCase().includes(query.toLowerCase())
        )
        .map(function (rec: ISessionData) {
          return (
            <SessionListItemClientWrapper key={rec.id} title={rec.title}>
              <SessionListItem rec={rec} />
            </SessionListItemClientWrapper>
          );
        })}
    </ul>
  );
}
