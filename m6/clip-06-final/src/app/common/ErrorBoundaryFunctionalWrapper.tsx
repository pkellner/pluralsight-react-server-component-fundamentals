"use client";

import React, { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) {
  return <div>
    There was an error: {error.message}
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>;


export default function ErrorBoundaryFunctionalWrapper({
  children,
}: {
  children: ReactNode;
}) {

  // @ts-ignore
  return (
    <>
      {
        /* @ts-ignore */
        <ErrorBoundary fallback={<ErrorFallback/>} onError={errorHandler}>
          {children}
        </ErrorBoundary>
      }
    </>
  );
}


  // // @ts-ignore
  // return (
  //   <>
  //     {
  //       /* @ts-ignore */
  //       <ErrorBoundary fallback={<div>problem found</div>} onError={errorHandler}>
  //         {children}
  //       </ErrorBoundary>
  //     }
  //   </>
  //);




