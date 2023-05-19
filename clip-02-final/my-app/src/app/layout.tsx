import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ overflow: "hidden" }}>
          <header className="header">
            <div className="container-main">
              <div>NAV</div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
