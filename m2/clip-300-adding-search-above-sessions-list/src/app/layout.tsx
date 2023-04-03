import React from "react";

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
