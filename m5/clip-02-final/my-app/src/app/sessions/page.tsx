export interface Session {
  id?: string;
  title?: string;
  speakerId?: string;
  description?: string;
}

async function getData() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);
  const data: Session[] = [
    {
      id: "7417",
      title: "How JavaScript Works",
      speakerId: "1124",
      description:
        "JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language. There are a lot of keywords in that sentence that are easily misunderstood. Let's break it down and understand what it all means.",
    },
    {
      id: "7366",
      title: "Cracking the Coding Interview",
      speakerId: "8367",
      description:
        "Programmer and best-selling author of Cracking the Coding Interview presents a technical talk on how coding interviews work and how to do well on them",
    },
    {
      id: "7444",
      title:
        "Are we there yet? A pragmatic look at quantum computing and Q# with Azure",
      speakerId: "10803",
      description:
        "Learn about history, promises and realities of quantum computing and gain an understanding of programming quantum emulators using Q#, a new language from Microsoft, and Azure.",
    },
  ];
  return data;
}

export default async function Sessions() {
  const sessions = await getData();
  return (
    <div className="container-main">
      <div className="sessions">
        <ul className="news-list">
          {sessions.map((session: Session) => {
            return (
              <li key={session.id} className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">{session?.title}</h3>
                  {session?.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
