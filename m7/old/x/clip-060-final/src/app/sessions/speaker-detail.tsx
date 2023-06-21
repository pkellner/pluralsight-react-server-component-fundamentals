import Image from "next/image";
import { speakersData } from "@/app/common/speakers-data";
import "server-only";
import ToolTipSpeaker from "@/app/common/tool-tip-speaker";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}

async function getSpeaker(speakerId: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  if (speakerId === "1124") {
    //throw new Error("error on speaker 1124")
  }
  return (
    speakersData.find((speaker: Speaker) => speaker.id === speakerId) || {}
  );
}

export default async function SpeakerDetail({
  speakerId,
}: {
  speakerId: string;
}) {
  const speaker: Speaker = await getSpeaker(speakerId);
  return (
    <ToolTipSpeaker speaker={speaker} key={speakerId}>
      <div className="col-12-col-sm-6 speakers-list-item">
        <div className="events-speaker d-flex align-items-center">
          <div className="events-speaker-photo">
            <Image
              src={`/speakers/speaker-${speaker?.id}.jpg`}
              alt={`${speaker.first} ${speaker.last}`}
              width={135}
              height={135}
            />
          </div>
          <div className="events-speaker-description">
            <a href="#">
              <div className="name">
                {speaker.first} {speaker.last}
              </div>
            </a>
          </div>
        </div>
      </div>
    </ToolTipSpeaker>
  );
}