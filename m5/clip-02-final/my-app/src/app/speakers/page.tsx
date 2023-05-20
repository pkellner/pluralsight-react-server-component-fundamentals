import Image from "next/image";
import Link from "next/link";
import SpeakerDetailWithBio from "@/app/speakers/speaker-detail-with-bio";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}

const speakerIds = ["1124", "8367", "10803"];



export default async function Sessions() {
  return (
    <div className="container-main speakers">
      <div className="row">
        <div className="col-12">
          <div>
            {speakerIds.map((speakerId) => {
              return (
                <SpeakerDetailWithBio key={speakerId} speakerId={speakerId} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
