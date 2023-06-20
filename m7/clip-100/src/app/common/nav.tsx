

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          <Image height={18} width={72} src="/SVCClogo.png" alt="Site Logo" />
        </Link>
        <div className="navbar-nav">
          <Link href="/sessions">
            <div className="nav-link">Sessions</div>
          </Link>
          <Link href="/speakers">
            <div className="nav-link">Speakers</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
