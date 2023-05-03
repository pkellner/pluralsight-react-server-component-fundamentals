import "server-only";

import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";

export default function SessionVideoLoading() {
  return (
    <Boundary isServerComponent={true}>
      <div className="card m-1">
        <a target="#">
          <div
            className="spinner"
            style={{ width: "105px", height: "105px" }}
          ></div>
        </a>
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
