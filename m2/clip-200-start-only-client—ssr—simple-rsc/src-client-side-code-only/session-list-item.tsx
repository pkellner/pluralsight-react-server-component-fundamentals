import {ISessionData} from "@/lib/ts-interfaces";
import Boundary from "@/lib/boundary";
import SessionVideo from "./session-video";

export default function SessionListItem({ rec }: { rec: ISessionData }) {
  return (
    <li key={rec.id} className="list-group-item border-0 ps-0">
      <Boundary>
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
            <div className="col-5 align-middle mt-2">
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
}
