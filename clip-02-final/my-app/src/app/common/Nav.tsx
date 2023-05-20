"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image height={18} width={72} alt="logo" src="/SVCClogo.png" />
        </a>
        <div className="navbar-nav">
          <Link href="/sessions">
            <div className="nav-link">Session</div>
          </Link>
          <Link href="/speakers">
            <div className="nav-link">Speaker</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
