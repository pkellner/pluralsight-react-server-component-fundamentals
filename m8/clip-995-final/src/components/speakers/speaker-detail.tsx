import SpeakerDetailWithBio from "@/speakers/speaker-detail-with-bio";
import { speakersData } from "@/common/speakers-data";
import { Speaker } from "@/common/code-camp-interfaces";
import Layout from "@/common/layout";
import { useEffect, useState } from "react";
import LoadingDetail from "@/speakers/loading-detail";

async function getSpeaker(id: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return (
    speakersData.find((speaker: Speaker) => speaker.id === id) || {
      id: "not found",
      first: "not found",
      last: "not found",
      bio: "not found",
      sessionId: "not found",
    }
  );
}

export default function SpeakerDetail({ speakerId }: { speakerId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [speakerDetail, setSpeakerDetail] = useState<Speaker>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getSpeaker(speakerId);
        setSpeakerDetail(response);
        setIsLoading(false);
      } catch (e) {
        setError("Error loading speakers");
      }
    };
    fetchData().then((r) => void 0);
  }, [speakerId]);

  if (isLoading) {
    return <LoadingDetail />;
  }

  if (error) {
    return <div>Error Loading Speaker: {error}</div>;
  }

  return (
    <Layout>
      <div className="container-main speakers">
        <div className="row">
          <div className="col-12 speakers-list-item p-2">
            <SpeakerDetailWithBio speaker={speakerDetail} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
