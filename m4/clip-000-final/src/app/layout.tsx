import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styles.css";

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
