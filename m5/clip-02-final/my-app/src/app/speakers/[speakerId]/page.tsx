import SpeakerDetailWithBio from "@/app/speakers/speaker-detail-with-bio";

export default async function SpeakerDetailById({
  params,
}: {
  params: { speakerId: string };
}) {
  return (
    <div className="col-12 speakers-list-item">
      <SpeakerDetailWithBio speakerId={params.speakerId} />
    </div>
  );
}
