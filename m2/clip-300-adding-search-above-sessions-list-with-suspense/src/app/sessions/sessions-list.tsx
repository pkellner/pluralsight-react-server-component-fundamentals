import "server-only";
import Boundary from "@/lib/boundary";
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import { ISessionData } from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";
import SessionListItemClientWrapper from "@/src/app/sessions/session-list-item-client-wrapper";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionsList() {
  await delay(2000);
  const res = await fetch(`http://localhost:3000/api/sessiondata`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function SessionsList() {
  const sessionData = await getSessionsList();

  return (
    <Boundary isServerComponent={true}>
      <div className="container">
        <div className="row">
          {sessionData.map(function (rec: ISessionData) {
            return (
              <SessionListItemClientWrapper key={rec.id} title={rec.title}>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
                  key={rec.id}
                >
                  <SessionListItem rec={rec} />
                </div>
              </SessionListItemClientWrapper>
            );
          })}
        </div>
      </div>
    </Boundary>
  );
}
