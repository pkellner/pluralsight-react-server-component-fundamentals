import { sessionsData } from "@/common/sessions-data";
import React, { useEffect, useState } from "react";
import { Session } from "@/common/code-camp-interfaces";
import Link from "next/link";
import SessionLinesLoading from "@/sessions/session-lines/session-lines-loading";

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSessions()");
  return sessionsData;
}

export default function SessionLines() {
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
    return <SessionLinesLoading />;
  }

  if (error) {
    return <div>Error Loading Speakers: {error}</div>;
  }

  return (
    <>
      {sessionsList?.map((session: Session) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={session.id}
          >
            <div className="row">
              <div className="col-9">{session?.title}</div>
              <div className="col-3">
                <Link href={`/speakers/${session.speakerId}`}>Speaker</Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
