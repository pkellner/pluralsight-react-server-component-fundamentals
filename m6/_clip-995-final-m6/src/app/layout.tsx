import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata = {
  title: 'Conference App',
  description: 'Generated for React Server Components Fundamentals Course'
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
