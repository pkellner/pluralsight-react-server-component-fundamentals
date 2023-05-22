import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata = {
  title: "SV Code Camp Next.js 13 Exp",
  description: "Silicon Valley Code Camp with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ overflow: "hidden" }}>{children}</div>
      </body>
    </html>
  );
}
