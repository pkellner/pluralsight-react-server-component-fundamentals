import Boundary from "../lib/boundary";
import React from "react";
import SessionVideo from "./session-video";

export default function SessionsList({ sessionData, query }) {
  return (
    <ul className="list-group">
      {sessionData
        .filter((rec) => rec.title.toLowerCase().includes(query.toLowerCase()))
        .map(function (rec) {
          return (
            <li key={rec.id} className="list-group-item border-0 ps-0">
              <Boundary enabled={true}>
                <div className="card">
                  <div className="row g-0">
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title smaller-item">{rec.title}</h5>
                        <p className="card-text small">
                          {rec.descriptionShort.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <div className="col-4 align-middle mt-4">
                      <SessionVideo
                        id={
                          rec?.sessionVideos?.length > 0 &&
                          rec.sessionVideos[0].youTubeUrl
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
