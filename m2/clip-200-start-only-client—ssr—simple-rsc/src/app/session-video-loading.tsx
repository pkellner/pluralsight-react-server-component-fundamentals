import "server-only";

import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";

export default async function SessionVideoLoading() {
  return (
    <Boundary isServerComponent={true} enabled={false}>
      <div className="row">
        <div className="col-12">
          <ShowBusyIndicator />
        </div>
      </div>
    </Boundary>
  );
}
