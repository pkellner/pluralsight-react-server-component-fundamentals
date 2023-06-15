import { Session } from "@/common/code-camp-interfaces";
import { sessionsData } from "@/common/sessions-data";

async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return sessionsData;
}

export default async function Sessions() {
  const sessions = await getSessions();

  return (
    <>
      {sessions.map((session: Session) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={session.id}
          >
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
