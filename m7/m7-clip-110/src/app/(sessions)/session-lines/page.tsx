import { Session } from "@/common/code-camp-interfaces";
import { sessionsData } from "@/common/sessions-data";
import Link from "next/link";
async function getSessions() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSessions()");
  return sessionsData;
}

export default async function SessionLines() {
  const sessions = await getSessions();
  return (
    <>
      {sessions.map((session: Session) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={session.id} >
            <div className="row">
              <div className="col-9">{session?.title}</div>  
              <div className="col-3">
                <Link href={`/speakers/${session.speakerId}`}>
                  Speaker
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

