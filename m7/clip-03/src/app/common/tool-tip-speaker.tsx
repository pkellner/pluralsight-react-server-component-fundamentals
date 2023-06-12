'use client';
import { ReactNode, useState } from 'react';
import { Speaker } from "@/app/speaker-detail";

export default function ToolTipSpeaker({
  children,
  speaker,
}: {
    children: ReactNode;
    speaker: Speaker;
  }) {
  
  const [show, setShow] = useState(false);
  return (
    <div className="position-relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)} >
      {children}
      {show && (
        <div className="tooltip show bs-tooltip-top" role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            <h4 className="mt-2">{speaker.first} {speaker.last}</h4>
            <hr />
            <p>{speaker.bio?.slice(0, 150)}...</p>
          </div>
        </div>
      )}
    </div>
  );
}