import { sessionsData } from "@/common/sessions-data";
import SpeakerDetail from "@/sessions/speaker-detail";
import React, { Suspense } from "react";
import SpeakerDetailLoading from "@/sessions/speaker-detail-loading";
import ErrorBoundaryFunctionalWrapper from "@/common/error-boundary-functional-wrapper";
import ErrorBoundaryLoadingSpeaker from "@/sessions/error-boundary-loading-speaker";
import { Session } from "@/common/code-camp-interfaces";

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSessions()");
  return sessionsData;
}

function SessionsLoading() {
  return (
    <div className="container-main">
      <div className="sessions">
        <div className="news-list">
          {[1, 2, 3].map((id) => {
            return (
              <li className="news-tile" key={id}>
                <div className="news-tile__top">
                  <h3 className="news-tile__title">Loading...</h3>
                </div>
                <div className="news-tile__bottom">
                  <SpeakerDetailLoading />
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
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
