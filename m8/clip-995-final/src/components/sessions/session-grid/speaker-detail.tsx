import Image from "next/image";
import { speakersData } from "@/common/speakers-data";
import ToolTipSpeaker from "@/common/tool-tip-speaker";
import { Speaker } from "@/common/code-camp-interfaces";
import Link from "next/link";

export default function SpeakerDetail({
  speakerId,
}: {
  speakerId: string;
}) {
  const speaker: Speaker = speakersData.find((speaker: Speaker) => speaker.id === speakerId) || {}
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
            <Link href={`/speakers/${speaker.id}`}>
              <div className="name">
                {speaker.first} {speaker.last}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ToolTipSpeaker>
  );
}
