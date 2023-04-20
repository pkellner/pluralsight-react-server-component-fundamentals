import "server-only";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeaderClock from "./app-header-clock";
import AppServerComponent from "./app-server-component";
import ThemeProvider from "./app-context";
import AppContainer from "./app-container";

export default function AppHeader() {
  const isoDateString = new Date().toISOString();

  return (
    <ThemeProvider>
      <AppContainer>
        <h2>Clock App</h2>
        <hr />

        <AppHeaderClock isoDateString={isoDateString}>
          <AppServerComponent />
        </AppHeaderClock>
      </AppContainer>
    </ThemeProvider>
  );
}
