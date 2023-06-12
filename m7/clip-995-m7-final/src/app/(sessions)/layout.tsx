"use client";
import Link from "next/link";

import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isGrid, setIsGrid] = useState<boolean>(false);

  return (
    <div className="container-main">
      <div className="row gy-4 m-3">
        <div className="d-flex justify-content-end">
          <Link
            className={`= ${
              !isGrid ? "mb-3 p-3 bg-light" : "mb-3 p-3 bg-secondary text-white"
            }`}
            href={`/sessions`}
            onClick={() => setIsGrid(true)}
          >
            grid
          </Link>
          <br />
          <Link
            className={` ${
              isGrid ? "mb-3 p-3 bg-light" : "mb-3 p-3 bg-secondary text-white"
            }`}
            href={`/sessions-short`}
            onClick={() => setIsGrid(false)}
          >
            list
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
