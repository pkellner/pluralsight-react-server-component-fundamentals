import SpeakerDetailWithBio from
  "@/speakers/speaker-detail-with-bio";
import { speakersData } from "@/common/speakers-data";
import { Speaker } from "@/common/code-camp-interfaces";

async function getSpeaker(id: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return (
    speakersData.find((speaker : Speaker) => speaker.id === id) || {
      id: "not found",
      first: "not found",
      last: "not found",
      bio: "not found",
      sessionId: "not found",
    }
  );
}

export default async function SpeakerDetailById({
  params,
}: {
  params: { speakerId: string }
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