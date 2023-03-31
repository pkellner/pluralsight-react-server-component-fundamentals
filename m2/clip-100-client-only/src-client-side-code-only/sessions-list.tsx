import React from "react";
import SessionVideo from "./session-video";

import Boundary from "@/lib/boundary";
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import { ISessionData } from "@/lib/ts-interfaces";

export default function SessionsList({ sessionData, query } : { sessionData?: ISessionData[], query: string}) {
  if (!sessionData) {
    return <ShowBusyIndicator />;
  }

  return (
    <ul className="list-group">
      {sessionData
        .filter((rec : ISessionData) => rec.title.toLowerCase().includes(query.toLowerCase()))
        .map(function (rec : ISessionData) {
          return (
            <li key={rec.id} className="list-group-item border-0 ps-0">
              <Boundary enabled={true}>
                <div className="card">
                  <div className="row g-0">
                    <div className="col-7">
                      <div className="card-body">
                        <h5 className="card-title smaller-item">{rec.title}</h5>
                        <p className="card-text small">
                          {rec.descriptionShort.substring(0, 85)}...
                        </p>
                      </div>
                    </div>
                    <div className="col-5 align-middle mt-4">
                      <SessionVideo
                        id={
                          rec?.sessionVideos?.length > 0 ?
                          rec.sessionVideos[0].youTubeUrl : undefined
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
