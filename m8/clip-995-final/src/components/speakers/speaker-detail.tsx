import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";
import { speakersData } from "@/common/speakers-data";
import { Speaker } from "@/common/code-camp-interfaces";
import Layout from "@/common/layout";

export default function SpeakerDetail({speakerId} : {speakerId: string}) {
  const speaker = speakersData.find(
    (speaker: Speaker) => speaker.id === speakerId
  ) || {
    id: "not found",
    first: "not found",
    last: "not found",
    bio: "not found",
    sessionId: "not found",
  };

  return (
    <Layout>
      <div className="container-main speakers">
        <div className="row">
          <div className="col-12 speakers-list-item p-2">
            <SpeakerDetailWithBio speaker={speaker} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
