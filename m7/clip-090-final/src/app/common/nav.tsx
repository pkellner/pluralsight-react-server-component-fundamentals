"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image height={18} width={72} alt="logo" src="/SVCClogo.png" />
        </a>
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
