import "server-only";

import AppHeaderClock from "./app-header-clock";
export default function AppHeader() {
  const isoDateString = new Date().toISOString();
  return (
    <div className="container">
      <AppHeaderClock isoDateString={isoDateString} />
    </div>
  );
}
