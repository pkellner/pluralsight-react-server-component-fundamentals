import { sessionsData } from "@/common/sessions-data";
import SpeakerDetail from "@/sessions/speaker-detail";
import React, { Suspense } from "react";
import SpeakerDetailLoading from "@/sessions/speaker-detail-loading";
import ErrorBoundaryLoadingSpeaker from "@/sessions/error-boundary-loading-speaker";
import { Session } from "@/common/code-camp-interfaces";

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSessions()");
  return sessionsData;
}

export default async function Sessions() {
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
