import "server-only";

import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";

export default function SessionVideoLoading() {

  return (
    <Boundary isServerComponent={true}>
        <ShowBusyIndicator />
    </Boundary>
  );
}
