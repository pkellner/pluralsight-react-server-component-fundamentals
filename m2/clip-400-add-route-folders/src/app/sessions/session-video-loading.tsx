import "server-only";

import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";

export default function SessionVideoLoading() {
  return (
    <Boundary isServerComponent={true}>
      <div className="card m-1">
        <a target="#">
          <img
              width="65" height="37"
            src="/images/loading-box.gif"
            className="card-img-top"
            alt="youtube thumb"
          />
        </a>
        <div
          className="card-body d-flex justify-content-end"
          style={{ backgroundColor: "dimgray", padding: "4px 8px" }}
        >
          <p
            className="card-text fst-italic text-white mb-0"
            style={{ lineHeight: 1, fontSize: "11px" }}
          >
            Views 999999
          </p>
        </div>
      </div>
    </Boundary>
  );

  return (
    <Boundary isServerComponent={true}>
      <div className="card m-1">
        <ShowBusyIndicator />
      </div>
    </Boundary>
  );
}
