import "server-only";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeaderClock from "./app-header-clock";
import AppServerComponent from "./app-server-component";
import AppThemeProvider from "./app-theme-provider";

export default function AppHeader() {
  const isoDateString = new Date("December 17, 1995 10:24:00").toISOString();

  return (
    <AppThemeProvider>
      <div className="container bg-light text-dark m-4 w-auto">
        <h2>Clock App</h2>
        <hr />
        <AppHeaderClock isoDateString={isoDateString}>
          <AppServerComponent />
        </AppHeaderClock>
      </div>
    </AppThemeProvider>
  );
}
