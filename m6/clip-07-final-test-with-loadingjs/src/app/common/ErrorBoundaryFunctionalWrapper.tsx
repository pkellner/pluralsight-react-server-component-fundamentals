"use client";

import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function ErrorBoundaryFunctionalWrapper({
  children,
  errorComponent,
}: {
  children: ReactNode;
  errorComponent?: ReactNode;
}) {
  function Fallback({ error }: { error: Error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  if (!errorComponent) {
    return (
      <>
        {
          /* @ts-ignore */
          <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>
        }
      </>
    );
  }

  return (
    <>
      {
        /* @ts-ignore */
        <ErrorBoundary FallbackComponent={errorComponent}>{children}</ErrorBoundary>
      }
    </>
  );

}
