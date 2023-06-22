import Image from "next/image";
import { speakersData } from "@/common/speakers-data";
import ToolTipSpeaker from "@/common/tool-tip-speaker";
import { Speaker } from "@/common/code-camp-interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import SpeakerDetailLoading from "@/sessions/session-grid/speaker-detail-loading";

async function getSpeaker(id: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return (
    speakersData.find((speaker: Speaker) => speaker.id === id) || {
      id: "not found",
      first: "not found",
      last: "not found",
      bio: "not found",
      sessionId: "not found",
    }
  );
}

export default function SpeakerDetail({ speakerId }: { speakerId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [speakerDetail, setSpeakerDetail] = useState<Speaker>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSpeaker(speakerId);
        setSpeakerDetail(response);
        setIsLoading(false);
      } catch (e) {
        setError("Error loading speakers");
      }
    };
    fetchData().then((r) => void 0);
  }, []);

  if (isLoading) {
    return <SpeakerDetailLoading />;
  }

  if (error) {
    return <div>Error Loading Speaker: {error}</div>;
  }

  console.log("speakerId", speakerId);

  return (
    <ToolTipSpeaker speaker={speakerDetail} key={speakerId}>
      <div className="col-12-col-sm-6 speakers-list-item">
        <div className="events-speaker d-flex align-items-center">
          <div className="events-speaker-photo">
            <Image
              src={`/speakers/speaker-${speakerDetail?.id}.jpg`}
              alt={`${speakerDetail?.first} ${speakerDetail?.last}`}
              width={135}
              height={135}
            />
          </div>
          <div className="events-speaker-description">
            <Link href={`/speakers/${speakerDetail?.id}`}>
              <div className="name">
                {speakerDetail?.first} {speakerDetail?.last}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ToolTipSpeaker>
  );
}
