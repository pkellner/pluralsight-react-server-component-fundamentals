import Image from "next/image";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  sessionId?: string;
}

async function getSpeaker(speakerId: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);
  const data: Speaker[] = [
    {
      id: "1124",
      first: "Douglas",
      last: "Crockford",
      sessionId: "7417",
    },
    {
      id: "8367",
      last: "McDowell",
      first: "Gayle",
      sessionId: "7366",
    },
    {
      id: "10803",
      first: "Eugene",
      last: "Chuvyrov",
      sessionId: "7444",
    },
  ];
  const speakerData = data.find((speaker) => speaker.id === speakerId);
  return speakerData ?? data[0]; // this should never happen
}

export default async function SpeakerDetail({
  speakerId,
}: {
  speakerId: string;
}) {
  console.log("speakerId", speakerId);
  const speaker: Speaker = await getSpeaker(speakerId);

  return (
    <div className="col-12 col-sm-6 speakers-list-item" key={speaker.id}>
      <div className="events-speaker d-flex align-items-center">
        <div className="events-speaker-photo">
          <Image
            src={`/speakers/speaker-${speaker?.id}.jpg`}
            alt={`${speaker.first} ${speaker.last}`}
            width={135}
            height={135}
          />
        </div>
        <div className=" events-speaker-description">
          <a href={`/speakers/${speaker.id}`}>
            <div className=" name">
              {speaker.first} {speaker.last}{" "}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
