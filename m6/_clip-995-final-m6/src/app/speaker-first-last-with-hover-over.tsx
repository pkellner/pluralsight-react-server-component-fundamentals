"use client";

import React from "react";
import ToolTipSpeaker from "@/app/common/tool-tip-speaker";
import {Speaker} from "@/app/speaker-detail";


function SpeakerFirstLastWithHoverOver({ speaker }: { speaker: Speaker }) {
  return (
    <ToolTipSpeaker speakerName={`${speaker.first} ${speaker.last}`} speakerBio={speaker.bio ?? ""}  >
      <div className="name">
        {speaker.first} {speaker.last}
      </div>
    </ToolTipSpeaker>
  );
}

export default React.memo(SpeakerFirstLastWithHoverOver);
