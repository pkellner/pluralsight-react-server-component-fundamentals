import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";
import { speakersData } from "@/common/speakers-data";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}

async function getSpeakers() {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000); // 2 seconds
  //throw new Error("Errors in getSpeakers()");
  return speakersData;
}

export default async function Sessions() {

  const speakers = await getSpeakers();
  //const speakerIds = data.map((speaker) => speaker.id);

  return (
    <div className="container-main speakers">
      <div className="row">
        {speakers.map((speaker: Speaker) => {
          return (
            <div
              className="col-sm-12 col-lg-6 speakers-list-item"
              key={speaker.id}
            >
              <SpeakerDetailWithBio speaker={speaker} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
