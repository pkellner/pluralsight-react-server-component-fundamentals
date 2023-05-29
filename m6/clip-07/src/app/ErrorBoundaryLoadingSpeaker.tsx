"use client";

import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function ErrorBoundaryFunctionalWrapper({
  children,
}: {
  children: ReactNode;
}) {
  function Fallback({ error }: { error: Error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}
