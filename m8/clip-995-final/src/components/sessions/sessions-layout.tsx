import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SessionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isGrid = usePathname() === "/sessions";
  const gridLinkClass =
    "mb-3 p-3 " + (isGrid ? "bg-secondary text-white" : "bg-light text-dark");
  const listLinkClass =
    "mb-3 p-3 " + (isGrid ? "bg-light text-dark" : "bg-secondary text-white");

  return (
    <div className="container-main">
      <div className="row gy-4 m-3">
        <div className="d-flex justify-content-end">
          <Link href="/sessions" className={gridLinkClass}>
            Grid
          </Link>
          <Link href="/session-lines" className={listLinkClass}>
            List
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
