"use client";

import {ReactNode, useState} from "react";

export default function ToolTipSpeaker({
                                      children,
                                      speakerName,
                                      speakerBio,
                                    }: {
  children: ReactNode;
  speakerName: string;
  speakerBio: string;
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
            <h4 className="mt-2">{speakerName}</h4>
            <hr />
            <p>{speakerBio?.slice(0,120)}...</p>
          </div>
        </div>
      )}
    </div>
  );
}
