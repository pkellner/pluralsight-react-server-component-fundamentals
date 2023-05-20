import Image from "next/image";
import Link from "next/link";

export interface Speaker {
  id?: string;
  first?: string;
  last?: string;
  sessionId?: string;
}

async function getData() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);
  const data: Speaker[] = [
    {
      id: "1124",
      first: "Crockford",
      last: "Douglas",
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
  return data;
}

export default async function Sessions() {
  const speakers = await getData();
  return (
    <div className="container-main speakers">
      <div className="row">
        <div className="col-12">
          <div>
            {speakers.map((speaker: Speaker) => {
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


                          <div className=" name">
                            {speaker.first} {speaker.last}{" "}
                          </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
