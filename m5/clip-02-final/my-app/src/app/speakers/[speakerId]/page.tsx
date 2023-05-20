import Image from "next/image";
import Link from "next/link";
import SpeakerDetail from "@/app/sessions/speaker-detail";
import SpeakerDetailWithBio from "@/app/speakers/speaker-detail-with-bio";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  bio?: string;
  sessionId?: string;
}

export default async function SpeakerDetailById({
  params,
}: {
  params: { speakerId: string };
}) {
  return <SpeakerDetailWithBio speakerId={params.speakerId} />;
}
