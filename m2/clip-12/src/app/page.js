import "server-only";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeaderClock from "./app-header-clock";
import AppServerComponent from "./app-server-component";
import AppThemeProvider from "./app-theme-provider";
import AppContainer from "./app-container";

export default function AppHeader() {
  const isoDateString = new Date("December 17, 1995 10:24:00").toISOString();

  return (
    <AppThemeProvider>
      <AppContainer>
        <h2>Clock App</h2>
        <hr />
        <AppHeaderClock isoDateString={isoDateString}>
          <AppServerComponent />
        </AppHeaderClock>
      </AppContainer>
    </AppThemeProvider>
  );
}
