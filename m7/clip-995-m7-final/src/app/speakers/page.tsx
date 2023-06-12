import SpeakerDetailWithBio from "@/app/speakers/speaker-detail-with-bio";
import { speakersData } from "@/app/common/speakers-data";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}

const speakerIds = speakersData.map((speaker) => speaker.id);

export default async function Sessions() {
  return (
    <div className="container-main speakers">
      <div className="row">
        {speakerIds.map((speakerId) => {
          return (
            <div
              className="col-sm-12 col-lg-6 speakers-list-item"
              key={speakerId}
            >
              <SpeakerDetailWithBio key={speakerId} speakerId={speakerId} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
