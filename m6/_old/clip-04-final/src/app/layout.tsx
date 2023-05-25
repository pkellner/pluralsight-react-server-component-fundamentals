import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata = {
  title: 'Conference App',
  description: 'Tutorial for React Server Components',
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
