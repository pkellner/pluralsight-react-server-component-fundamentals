"use client";

import { Speaker } from "@/app/speakers/page";
import React from "react";
import ToolTip from "@/app/common/tool-tip";


function SpeakerFirstLastWithHoverOver({ speaker }: { speaker: Speaker }) {
  return (
    <ToolTip speakerName={`${speaker.first} ${speaker.last}`} speakerBio={speaker.bio ?? ""}  >
      <div className="name">
        {speaker.first} {speaker.last}
      </div>
    </ToolTip>
  );
}

export default React.memo(SpeakerFirstLastWithHoverOver);
