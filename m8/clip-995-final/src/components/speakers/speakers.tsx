import { speakersData } from "@/common/speakers-data";
import { Speaker } from "@/common/code-camp-interfaces";
import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";
import { useEffect, useState } from "react";
import Loading from "@/speakers/loading";
import Layout from "@/common/layout";
import ErrorSpeaker from "@/speakers/error-speaker";

async function getSpeakers() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return speakersData;
}

export default function Speakers() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [speakerList, setSpeakerList] = useState<Speaker[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSpeakers();
        setSpeakerList(response);
        setIsLoading(false);
      } catch (e) {
        setError("Error loading speakers");
      }
    };
    fetchData().then((r) => void 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error Loading Speakers: {error}</div>;
  }

  return (
    <Layout>
      <div className="container-main speakers">
        <div className="row">
          {speakerList?.map((speaker: Speaker) => {
            return (
              <div
                className="col-sm-12 col-lg-6 speakers-list-item"
                key={speaker.id}
              >
                <ErrorSpeaker>
                  <SpeakerDetailWithBio speaker={speaker} />
                </ErrorSpeaker>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
