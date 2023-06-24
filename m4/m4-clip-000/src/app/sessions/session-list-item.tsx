import "server-only";
import { SessionData } from "@/lib/ts-interfaces";
import SessionVideo from "@/src/app/sessions/session-video";

export default function SessionListItem({ rec }: { rec: SessionData }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
      <div className="card m-1">
        <div className="row g-0">
          <div className="col-7">
            <div className="card-body">
              <h6 className="card-title smaller-item">{rec.title}</h6>
              <p className="card-text small text">
                {(rec.descriptionShort ?? "").substring(0, 60)}...
              </p>
            </div>
          </div>
          <div className="col-5 align-middle mt-2 ">
            <SessionVideo id={rec.sessionVideos?.[0]?.youTubeUrl ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
}
