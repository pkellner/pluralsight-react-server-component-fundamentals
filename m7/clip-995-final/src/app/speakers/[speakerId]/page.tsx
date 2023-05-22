import SpeakerDetailWithBio from "@/app/speakers/speaker-detail-with-bio";

export default async function SpeakerDetailById({
  params,
}: {
  params: { speakerId: string };
}) {
  return (
    <div className="col-12 speakers-list-item p-2">
      <SpeakerDetailWithBio speakerId={params.speakerId} />
    </div>
  );
}
