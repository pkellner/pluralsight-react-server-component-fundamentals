import { useRouter } from "next/router";
import SpeakerDetail from "@/speakers/speaker-detail";

export default function SpeakerId() {
  const router = useRouter();
  const speakerId = router.query.speakerId as string;
  return <SpeakerDetail speakerId={speakerId} />;
}
