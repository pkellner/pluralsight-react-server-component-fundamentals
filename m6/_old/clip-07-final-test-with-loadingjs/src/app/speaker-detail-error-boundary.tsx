"use client";

import React from "react";

import { ErrorBoundary } from "react-error-boundary";
import Image from "next/image";

function SpeakerDetailError() {
  const redSquare = {
    width: "135px",
    height: "135px",
    border: "2px solid red",
    margin: "auto",
    marginTop: "50px",
  };

  return (
    <div className="col-12 col-sm-6 speakers-list-item">
      <div className="events-speaker d-flex align-items-center">
        <div className="events-speaker-photo">
          <Image
            src="/errorsquare.png"
            alt="loading speaker..."
            width={135}
            height={135}
          />
        </div>
        <div className=" events-speaker-description">
          <div className=" name">Error Loading</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-12 col-sm-6 speakers-list-item">
      <div className="events-speaker d-flex align-items-center">
        {/*<div className="events-speaker-photo">*/}
        <div style={redSquare}></div>
        {/*</div>*/}
        <div
          className="events-speaker-description"
          style={{ visibility: "visible" }}
        >
          Error Showing Speaker
        </div>
      </div>
    </div>
  );
}

export default async function SpeakerDetailErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ErrorBoundary FallbackComponent={SpeakerDetailError}>
        {children}
      </ErrorBoundary>
    </>
  );

  //return <ErrorBoundaryFunctionalWrapper >{children}</ErrorBoundaryFunctionalWrapper>;
}
