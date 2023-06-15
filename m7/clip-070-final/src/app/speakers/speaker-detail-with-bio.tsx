import Image from "next/image";
import { Speaker } from "@/app/speakers/page";

export default async function SpeakerDetailWithBio({
  speaker,
}: {
  speaker: Speaker;
}) {

  // NOTE, WE ARE NOT CATCHING INDIVIDUAL ERROR HERE, IF WE DID WE WOULD NEED TO ADD ERRORBOUNDARY
  if (speaker.id === "1124") {
    //throw new Error("error on speaker 1124")
  }

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
      <div className=" events-speaker-description">
        <div className=" name">
          {speaker.first} {speaker.last}{" "}
        </div>
        <div className=" bio">{speaker.bio}</div>
      </div>
    </div>
  );
}
