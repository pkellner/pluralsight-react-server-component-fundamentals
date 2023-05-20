import Image from "next/image";
import { Speaker } from "@/app/speakers/page";

async function getBySpeakerId(id: string) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);
  const data: Speaker[] = [
    {
      id: "1124",
      first: "Douglas",
      last: "Crockford",
      sessionId: "7417",
      bio: "Douglas Crockford is an American computer programmer and entrepreneur who is best known for his ongoing involvement in the development of the JavaScript language, for having popularized the data format JSON (JavaScript Object Notation), and for developing various JavaScript related tools such as JSLint and JSMin.",
    },
    {
      id: "8367",

      first: "Gayle",
      last: "McDowell",
      sessionId: "7366",
      bio: "Gayle Laakmann McDowell is an American businesswoman and author. She is the founder and CEO of CareerCup and the author of Cracking the Tech Career and Cracking the Coding Interview, which are the 1st and 4th best-selling books on Amazon in their category.",
    },
    {
      id: "10803",
      first: "Eugene",
      last: "Chuvyrov",
      sessionId: "7444",
      bio: "Eugene Chuvyrov is a software engineer at Google, Munich. He is a co-creator of AngularJS framework and a co-founder of the AngularUI project that provides Bootstrap-based UI widgets for AngularJS.",
    },
  ];
  const speakerData: Speaker = data.find((speaker) => speaker.id === id) ?? {};
  console.log("speakerData", speakerData)
  return speakerData;
}

export default async function SpeakerDetailWithBio({
  speakerId,
}: {
  speakerId: string;
}) {
  const speaker = await getBySpeakerId(speakerId);

  return (
    <div className="col-12 col-sm-6 speakers-list-item">
      <div className="events-speaker d-flex align-items-center">
        <div className="events-speaker-photo">
          <Image
            src={`/speakers/speaker-${speakerId}.jpg`}
            alt={`${speaker.first} ${speaker.last}`}
            width={135}
            height={135}
          />
        </div>
        <div className=" events-speaker-description">
          <div className=" name">
            {speaker.first} {speaker.last}{" "}
          </div>
          <div className=" bio">{speaker.bio}</div>
        </div>
      </div>
    </div>
  );
}
