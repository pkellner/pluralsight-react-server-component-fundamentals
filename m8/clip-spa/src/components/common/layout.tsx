import React from "react";
import Nav from "@/common/nav";
import Footer from "@/common/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <header className="header">
          <div className="container-main">
            <Nav />
          </div>
        </header>
      </div>
      {children}
      <Footer />
    </>
  );
}
