import { sessionsData } from "@/app/common/sessions-data";
import SpeakerDetail from "@/app/speaker-detail";

export interface Session {
  id?: string;
  title?: string;
  speakerId?: string;
  description?: string;
}

async function getSessions() {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
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
                  <SpeakerDetail speakerId={session.speakerId ?? "0"} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}