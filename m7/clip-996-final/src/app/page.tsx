import { sessionsData } from "@/app/common/sessions-data";
import SpeakerDetail from "@/app/speaker-detail";
import React, { Suspense } from "react";
import SpeakerDetailLoading from "@/app/speaker-detail-loading";
import ErrorBoundaryFunctionalWrapper from
  "@/app/common/ErrorBoundaryFunctionalWrapper";
import ErrorBoundaryLoadingSpeaker from
  "@/app/ErrorBoundaryLoadingSpeaker";

export interface Session {
  id?: string;
  title?: string;
  speakerId?: string;
  description?: string;
}

async function getSessions() {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSessions()");
  return sessionsData;
}

function SessionsLoading() {
  return (
    <div className="container-main">
      <div className="sessions">
        <div className="news-list">
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default async function Page() {
  return (
    <ErrorBoundaryFunctionalWrapper>
      <Suspense fallback={<SessionsLoading />}>
        <Sessions />
      </Suspense>
    </ErrorBoundaryFunctionalWrapper>
  );
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
                  <ErrorBoundaryLoadingSpeaker>
                    <Suspense fallback={<SpeakerDetailLoading />}>
                      <SpeakerDetail speakerId={session.speakerId ?? "0"} />
                    </Suspense>
                  </ErrorBoundaryLoadingSpeaker>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}