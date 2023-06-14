"use client";
import Link from "next/link";

import React from "react";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const isGrid = usePathname() === "/sessions";

  console.log("params", params);

  return (
    <div className="container-main">
      <div className="row gy-4 m-3">
        <div className="d-flex justify-content-end">
          <Link
            className={`= ${
              !isGrid ? "mb-3 p-3 bg-light" : "mb-3 p-3 bg-secondary text-white"
            }`}
            href={`/sessions`}
          >
            grid
          </Link>
          <br />
          <Link
            className={` ${
              isGrid ? "mb-3 p-3 bg-light" : "mb-3 p-3 bg-secondary text-white"
            }`}
            href={`/session-lines`}
          >
            list
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
