import "server-only";

import Boundary from "@/lib/boundary";
import AppHeaderClock from "./app-header-clock";

export default function AppHeader() {

  const isoDateString = new Date().toISOString();

  return (
    <Boundary isServerComponent={true}>
      <header className="text-bg-light py-1">
        <div className="container">
          <div className="d-flex justify-content-between align-items-top">
            <h3 className="text-dark m-2">SV Code Camp List</h3>
            {/*<AppHeaderClock isoDateString={isoDateString} />*/}
          </div>
        </div>
      </header>
    </Boundary>
  );
}
