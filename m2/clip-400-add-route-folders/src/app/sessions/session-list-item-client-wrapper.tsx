"use client";

import { ReactNode, useContext } from "react";
import { QueryContext } from "@/src/app/contexts/query-provider";
import Boundary from "@/lib/boundary";

export default function SessionListItemClientWrapper({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const { query } = useContext(QueryContext);

  // return title.toLowerCase().includes(query.toLowerCase()) ? (
  //   <>{children}</>
  // ) : null;

  // now showing border here because it messes with grid col-x wrapping, we should show it to demonstrate there is a client boundary though
  return title.toLowerCase().includes(query.toLowerCase()) ? (
    <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
      <Boundary isServerComponent={false}>{children}</Boundary>
    </div>
  ) : null;
}
