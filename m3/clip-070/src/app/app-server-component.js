import "server-only";
import AppShowTheme from "./app-show-theme";

export default function AppServerComponent() {
  return (
    <div className="container border">
      <h2>I'm a Server Component</h2>
      <AppShowTheme />
    </div>
  );
}
