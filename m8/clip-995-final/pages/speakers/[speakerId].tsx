import { useRouter } from "next/router";
import SpeakerDetail from "@/speakers/speaker-detail";

export default function SpeakerId() {
  const router = useRouter();
  const speakerId = router.query.speakerId as string;

  return <SpeakerDetail speakerId={speakerId} />;

  // const speaker = speakersData.find(
  //   (speaker: Speaker) => speaker.id === speakerId
  // ) || {
  //   id: "not found",
  //   first: "not found",
  //   last: "not found",
  //   bio: "not found",
  //   sessionId: "not found",
  // };
  //
  // return (
  //   <Layout>
  //     <div className="container-main speakers">
  //       <div className="row">
  //         <div className="col-12 speakers-list-item p-2">
  //           <SpeakerDetailWithBio speaker={speaker} />
  //         </div>
  //       </div>
  //     </div>
  //   </Layout>
  // );
}
