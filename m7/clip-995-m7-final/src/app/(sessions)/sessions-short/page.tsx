import SpeakerDetail from "@/app/(sessions)/sessions/speaker-detail";
import { Suspense } from "react";
import { sessionsData } from "@/app/common/sessions-data";
import SpeakerDetailLoading from "@/app/(sessions)/sessions/speaker-detail-loading";
import SpeakerFirstLastWithHoverOver from "@/app/(sessions)/sessions/speaker-first-last-with-hover-over";

export interface Session {
  id?: string;
  title?: string;
  speakerId?: string;
  description?: string;
}

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);
  return sessionsData;
}

export default async function Sessions() {
  const sessions = await getSessions();

  return (
    <>
        {sessions.map((session: Session) => {
          return (
            <div className="col-12 p-3 border rounded shadow-sm bg-light" key={session.id}>
              <div className="row">
                <div className="col-9">{session?.title}</div>
                <div className="col-3">
                  <a href={`/speakers/${session.speakerId}`}>Speaker</a>
                </div>
              </div>
            </div>
          );
        })}
     </>
  );
}
