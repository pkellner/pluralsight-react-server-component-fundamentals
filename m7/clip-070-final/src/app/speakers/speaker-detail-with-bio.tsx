import Image from "next/image";
import { Speaker } from "@/common/CodeCampInterfaces";
import { speakersData } from "@/common/speakers-data";

async function getBySpeakerId(id: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  const speakerData: Speaker =
    speakersData.find((speaker) => speaker.id === id) ?? {};
  return speakerData;
}

export default async function SpeakerDetailWithBio({
  speakerId,
}: {
  speakerId: string;
}) {
  const speaker = await getBySpeakerId(speakerId);

  // NOTE, WE ARE NOT CATCHING INDIVIDUAL ERROR HERE, IF WE DID WE WOULD NEED TO ADD ERRORBOUNDARY
  if (speakerId === "1124") {
    //throw new Error("error on speaker 1124")
  }

  return (
    <div className="events-speaker d-flex align-items-center">
      <div className="events-speaker-photo">
        <Image
          src={`/speakers/speaker-${speakerId}.jpg`}
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
