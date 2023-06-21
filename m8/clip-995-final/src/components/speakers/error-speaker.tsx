import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Image from "next/image";

export default function ErrorSpeaker({ children }: { children: ReactNode }) {
  function Fallback({ error }: { error: Error }) {
    console.log(error.message);
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
          <div className="events-speaker-description">
            <div className="name">Error Loading</div>
          </div>
        </div>
      </div>
    );
  }

  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}
