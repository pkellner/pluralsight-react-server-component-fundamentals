"use client";

import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";


export default function ErrorBoundaryFunctionalWrapper({
  children,
  error,
}: {
  children: ReactNode;
  error: Error;
}) {
  function getFallbackRender() {
    return ({error}) => (
      <div>
        <p>An error occurred: <b style={{color: "red"}}>{error.message}</b></p>
      </div>
    );
  }

// @ts-ignore
  return (
    <>
      {
        /* @ts-ignore */
        <ErrorBoundary
          fallbackRender={getFallbackRender()}
        >
          {children}
        </ErrorBoundary>
      }
    </>
  );
}


