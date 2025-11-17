import "server-only";
import "bootstrap/dist/css/bootstrap.min.css";
import { cookies } from "next/headers";
import AppHeaderClock from "./app-header-clock";
import AppServerComponent from "./app-server-component";
import AppThemeProvider from "./app-theme-provider";
import AppContainer from "./app-container";

// UPDATED FOR NEXT.JS 16: The component is now async because cookies() returns a Promise
// In Next.js 16, dynamic APIs like cookies(), headers(), params, and searchParams
// are now asynchronous and must be awaited before accessing their properties
export default async function AppHeader() {
  // Read user preferences from cookies (server-side)
  // UPDATED FOR NEXT.JS 16: Added 'await' because cookies() now returns a Promise
  const cookieStore = await cookies();
  const userTheme = cookieStore.get('user-theme')?.value || 'light';
  const userName = cookieStore.get('user-name')?.value || '';
  const favoriteTime = cookieStore.get('favorite-time')?.value || '10:24';
  const counterValue = parseInt(cookieStore.get('counter-value')?.value || '0', 10);
  const counterGoal = parseInt(cookieStore.get('counter-goal')?.value || '100', 10);

  // Create ISO date string from favorite time
  const [hours, minutes] = favoriteTime.split(':');
  const baseDate = new Date("December 17, 1995");
  baseDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
  const isoDateString = baseDate.toISOString();

  return (
    <AppThemeProvider>
      <AppContainer initialTheme={userTheme}>
        <h2>Clock App</h2>
        <hr />
        <AppHeaderClock
          isoDateString={isoDateString}
          initialUserName={userName}
          initialFavoriteTime={favoriteTime}
          initialCount={counterValue}
          initialGoal={counterGoal}
        >
          <AppServerComponent />
        </AppHeaderClock>
      </AppContainer>
    </AppThemeProvider>
  );
}
