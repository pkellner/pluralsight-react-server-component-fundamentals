import { sessionsData } from "@/common/sessions-data";
import SpeakerDetail from "./speaker-detail";
import React, { useEffect, useState } from "react";

import { Session } from "@/common/code-camp-interfaces";
import SessionsLoading from "@/sessions/session-grid/sessions-loading";

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSessions()");
  return sessionsData;
}

export default function SessionGrid() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [sessionsList, setSessionsList] = useState<Session[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSessions();
        setSessionsList(response);
        setIsLoading(false);
      } catch (e) {
        setError("Error loading speakers");
      }
    };
    fetchData().then((r) => void 0);
  }, []);

  if (isLoading) {
    return <SessionsLoading />;
  }

  if (error) {
    return <div>Error Loading Speakers: {error}</div>;
  }

  return (
    <div className="container-main">
      <div className="sessions">
        <ul className="news-list">
          {sessionsList?.map((session: Session) => {
            return (
              <li key={session.id} className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">{session?.title}</h3>
                  {session?.description}
                </div>
                <div className="news-tile__bottom">
                  <SpeakerDetail speakerId={session.speakerId ?? "0"} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
