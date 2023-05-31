"use client";

import { ReactNode, useState } from "react";
import { Speaker } from "@/app/speaker-detail";

export default function ToolTipSpeaker({
  children,
  speaker,
}: {
  children: ReactNode;
  speaker: Speaker;
}) {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true);
  const handleMouseOut = () => setShow(false);

  return (
    <div
      className=" position-relative"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {children}
      {show && (
        <div className="tooltip show bs-tooltip-top" role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            <h4 className="mt-2">{speaker.first} {speaker.last}</h4>
            <hr />
            <p>{speaker.bio?.slice(0, 200)}...</p>
          </div>
        </div>
      )}
    </div>
  );
}
