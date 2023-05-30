import "server-only";
import React, { Suspense } from "react";
import { sessionsData } from "@/app/common/sessions-data";
import SpeakerDetail from "@/app/speaker-detail";
import SpeakerDetailLoading from "@/app/speaker-detail-loading";
import ErrorBoundaryFunctionalWrapper from "@/app/common/ErrorBoundaryFunctionalWrapper";

export interface Session {
  id?: string;
  title?: string;
  speakerId?: string;
  description?: string;
}

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);
  return sessionsData;
}



async function Sessions() {
  const sessions = await getSessions();

  return (
    <div className="container-main">
      <div className="sessions">
        <ul className="news-list">
          {sessions.map((session: Session) => {
            return (
              <li key={session.id} className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">{session?.title}</h3>
                  {session?.description}
                </div>
                <div className="news-tile__bottom">
                  <ErrorBoundaryFunctionalWrapper>
                    <Suspense fallback={<SpeakerDetailLoading />}>
                      <SpeakerDetail speakerId={session.speakerId ?? "0"} />
                    </Suspense>
                  </ErrorBoundaryFunctionalWrapper>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function SessionsLoading() {
  return (
    <div className="container-main">
      <div className="sessions">
        <ul className="news-list">
          {[1, 2, 3].map(() => {
            return (
              <li className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">Loading...</h3>
                </div>
                <div className="news-tile__bottom">
                  <SpeakerDetailLoading />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


export default async function Page() {
  return (
    <Suspense fallback={<SessionsLoading />}>
      <Sessions />
    </Suspense>
  );
}
