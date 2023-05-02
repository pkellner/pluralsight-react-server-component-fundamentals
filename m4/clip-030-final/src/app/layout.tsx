import React from "react";

import "./ common/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: 'Server Component Fundamentals',
  description: 'Pluralsight course',
}

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
