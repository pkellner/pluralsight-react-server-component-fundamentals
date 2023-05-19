import getRandomNumber from "../../../lib/getRandomNumber";
import { Suspense } from "react";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessions() {
  await delay(500);
  const res = await fetch(`http://localhost:3000/api/sessiondata?max=9`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

async function getVideo(id) {
  await delay(getRandomNumber(500, 1500));
  if (id == null) return { id: "101", snippet: { title: "no video" } };
  const res = await fetch(`http://localhost:3000/api/youtubedata/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}


export default async function App() {
  const sessions = await getSessions();
  return (
    <Suspense fallback={<div>Loading Sessions...</div>}>
      <Sessions sessions={sessions} />
    </Suspense>
  );
}

async function Video({ id }) {
  const video = await getVideo(id);
  return <div>{video.title}</div>;
}

async function Sessions({ sessions }) {
  return (
    <>{sessions.map(function (rec) {
        return (
          <Suspense fallback={<div>Loading Video...</div>}>
            <Video key={rec.id} id={rec.youTubeId} />
          </Suspense>
        );
      })}</>
  );
}