import "server-only";
import AppHeaderClock from "./app-header-clock";
import ThemeProvider from "./app-context";
import AppContainer from "./app-container";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AppHeader() {
  const str = new Date().toISOString();
  return (
    <ThemeProvider>
      <AppContainer>
        <h2>Clock App</h2>
        <AppHeaderClock isoDateString={str}></AppHeaderClock>
      </AppContainer>
    </ThemeProvider>
  );
}
