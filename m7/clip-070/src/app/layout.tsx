import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Nav from "@/common/nav";
import Footer from "@/common/footer";

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
      <body>
        <div style={{ overflow: "hidden" }}>
          <header className="header">
            <div className="container-main">
              <Nav />
            </div>
          </header>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
