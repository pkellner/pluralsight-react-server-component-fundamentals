import { speakersData } from "@/common/speakers-data";
import { Speaker } from "@/common/code-camp-interfaces";
import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";

async function getSpeakers() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  //throw new Error("error loading speakers");
  return speakersData;
}

export default async function Speakers() {
  const speakers = await getSpeakers();

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
