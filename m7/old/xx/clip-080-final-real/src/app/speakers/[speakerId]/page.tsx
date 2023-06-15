import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";
import { speakersData } from "@/common/speakers-data";
//import { Speaker } from "@/common/code-camp-interfaces";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}

async function getSpeaker(id: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);

  return (
    speakersData.find((speaker) => speaker.id === id) || {
      id: "not found",
      first: "not found",
      last: "not found",
      bio: "not found",
      sessionId: "not found",
    }
  );

  // const speakers = speakersData.filter((speaker: Speaker) => speaker.id === id);
  // const emptySpeaker : Speaker = {id: "0", first: "not found", last: "not found", bio: "not found", sessionId: "not found"}
  // return speakers.length === 0 ? emptySpeaker : speakers[0];
}

export default async function SpeakerDetailById({
  params,
}: {
  params: { speakerId: string };
}) {
  const speaker = await getSpeaker(params.speakerId);

  return (
    <div className="container-main speakers">
      <div className="row">
        <div className="col-12 speakers-list-item p-2">
          <SpeakerDetailWithBio speaker={speaker} />
        </div>
      </div>
    </div>
  );
}
