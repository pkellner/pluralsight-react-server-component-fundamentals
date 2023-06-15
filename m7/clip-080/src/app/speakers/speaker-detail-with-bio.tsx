import Image from "next/image";
import { Speaker } from "@/common/code-camp-interfaces";

export default function SpeakerDetailWithBio({
  speaker,
}: {
  speaker: Speaker;
}) {
  return (
    <div className="events-speaker d-flex align-items-center">
      <div className="events-speaker-photo">
        <Image
          src={`/speakers/speaker-${speaker.id}.jpg`}
          alt={`${speaker.first} ${speaker.last}`}
          width={135}
          height={135}
        />
      </div>
      <div className="events-speaker-description">
        <div className="name">
          {speaker.first} {speaker.last}
        </div>
        <div className="bio">{speaker.bio}</div>
      </div>
    </div>
  );
}
