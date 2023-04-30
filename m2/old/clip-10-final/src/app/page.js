import "server-only";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeaderClock from "./app-header-clock";
import AppServerComponent from "./app-server-component";

export default function AppHeader() {
  const isoDateString = new Date().toISOString();

  return (
    <div className="container bg-light text-dark  m-4 w-auto">
      <h2>Clock App</h2>
      <hr />
      <AppHeaderClock isoDateString={isoDateString}>
        <AppServerComponent />
      </AppHeaderClock>
    </div>
  );
}
