import Boundary from "@/lib/boundary";
import SessionVideoLoading from "@/src/app/sessions/session-video-loading";
import ShowBusyIndicator from "@/lib/show-busy-indicator";

export default function SessionListItem() {
    return (
        <Boundary isServerComponent={true}>
            <div className="card m-1">
                <div className="row g-0">
                    <div className="col-7">
                        <div className="card-body">
                            <h6 className="card-title smaller-item"><ShowBusyIndicator /></h6>
                            <p className="card-text small text">
                                <ShowBusyIndicator />
                            </p>
                        </div>
                    </div>
                    <div className="col-5 align-middle mt-2 ">
                        <SessionVideoLoading />
                    </div>
                </div>
            </div>
        </Boundary>
    )
    ;
}