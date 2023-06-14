import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Nav from "@/common/nav";
import Footer from "@/common/footer";

export const metadata = {
  title: "SV Code Camp Next.js 13 Exp",
  description: "Silicon Valley Code Camp with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
