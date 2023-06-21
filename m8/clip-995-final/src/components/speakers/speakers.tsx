import { speakersData } from "../common/speakers-data";
import { Speaker } from "../common/code-camp-interfaces";
import SpeakerDetailWithBio from "./speaker-detail-with-bio";
import Layout from "@/common/layout";



export default function Speakers() {
  const speakers = speakersData;

  return (
    <Layout>
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
    </Layout>
  );
}
