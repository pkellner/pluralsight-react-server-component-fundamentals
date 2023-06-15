"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const isGrid = usePathname() === "/sessions";
  const gridLinkClass =
    "mb-3 p-3 " +
    (isGrid ? "bg-secondary text-white" : "bg-light text-dark");
  const listLinkClass =
    "mb-3 p-3 " +
    (isGrid ? "bg-light text-dark" : "bg-secondary text-white");


  return (
    <div className="container-main">
      <div className="row gy-4 m-3">
        <div className="d-flex justify-content-end">
          <Link className={gridLinkClass} href="/sessions">
            Grid
          </Link>
          <br />
          <Link className={listLinkClass} href="/session-lines">
            List
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
