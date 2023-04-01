import "server-only";

import Boundary from "@/lib/boundary";
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import {ISessionData} from "@/lib/ts-interfaces";
import SessionVideo from "./session-video";

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
  const query = "";

  if (!sessionData) {
    return <ShowBusyIndicator />;
  }

  return (
    <ul className="list-group">
      {sessionData
        .filter((rec: ISessionData) =>
          rec.title.toLowerCase().includes(query.toLowerCase())
        )
        .map(function (rec: ISessionData) {
          return (
            <li key={rec.id} className="list-group-item border-0 ps-0">
              <Boundary isServerComponent={true}>
                <div className="card m-1">
                  <div className="row g-0">
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title smaller-item">{rec.title}</h6>
                        <p className="card-text small text">
                          {rec.descriptionShort.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                    <div className="col-5 align-middle mt-2 ">
                      <SessionVideo
                        id={
                          rec?.sessionVideos?.length > 0
                            ? rec.sessionVideos[0].youTubeUrl
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              </Boundary>
            </li>
          );
        })}
    </ul>
  );
}
