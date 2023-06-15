import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata = {
  title: "Server Component Fundamentals",
  description: "Pluralsight Course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
