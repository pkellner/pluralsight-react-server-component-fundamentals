import {ISessionData} from "@/lib/ts-interfaces";
import Boundary from "@/lib/boundary";
import {Suspense} from "react";
import SessionVideoLoading from "@/src/app/sessions/session-video-loading";
import SessionVideo from "@/src/app/sessions/session-video";

export default function SessionListItem(props: { rec: ISessionData }) {
    return <li className="list-group-item border-0 ps-0">
        <Boundary isServerComponent={true}>
            <div className="card m-1">
                <div className="row g-0">
                    <div className="col-7">
                        <div className="card-body">
                            <h6 className="card-title smaller-item">{props.rec.title}</h6>
                            <p className="card-text small text">
                                {props.rec.descriptionShort.substring(0, 60)}...
                            </p>
                        </div>
                    </div>
                    <div className="col-5 align-middle mt-2 ">
                        <Suspense fallback={<SessionVideoLoading/>}>
                            <SessionVideo
                                id={
                                    props.rec?.sessionVideos?.length > 0
                                        ? props.rec.sessionVideos[0].youTubeUrl
                                        : undefined
                                }
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </Boundary>
    </li>;
}