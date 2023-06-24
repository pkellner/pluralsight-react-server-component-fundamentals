"use client";

import { ReactNode, useContext } from "react";
import { QueryContext } from "@/src/app/contexts/query-provider";

export default function SessionListItemClient({
  children, title,
}: { children: ReactNode; title: string; }) {

  const { query } = useContext(QueryContext);
  return title.toLowerCase().includes(query.toLowerCase()) ? (
    <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
      {children}
    </div>) : null;
}