import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";
import { speakersData } from "@/common/speakers-data";



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
