import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "SV Code Camp",
  description: "React Server Component Fundamentals at Pluralsight",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
