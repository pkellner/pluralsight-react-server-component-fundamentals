import "server-only";
import AppHeaderClock from "./app-header-clock";
export default function AppHeader() {
  const str = new Date().toISOString();
  return (
    <div className="container">
      <h2>Clock App</h2>
      <AppHeaderClock isoDateString={str} />
    </div>
  );
}
