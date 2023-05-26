"use client";

import React from "react";

import { ErrorBoundary } from "react-error-boundary";
import Image from "next/image";

function SpeakerDetailError() {
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
