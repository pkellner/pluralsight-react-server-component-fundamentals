import getRandomNumber from "../../../lib/getRandomNumber";
import { Suspense } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessions() {
  await delay(2500);
  const res = await fetch(`http://localhost:3000/api/sessiondata?max=7`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.filter((rec, id) => {
    return id != 4; // get rid of "no video" for demo
  });
}

async function getVideo(id) {
  await delay(getRandomNumber(2000, 4500));
  if (id == null) return { id: "101", snippet: { title: "no video" } };
  const res = await fetch(`http://localhost:3000/api/youtubedata/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function App() {
  return (
    <div className="container m-2">
      <Suspense fallback={<div>Loading sessions...</div>}>
        <SessionsListComp />
      </Suspense>
    </div>
  );
}

async function VideoComp({ id }) {
  const video = await getVideo(id);
  return <div>{video?.snippet?.title}</div>;
}

async function SessionsListComp() {
  const sessions = await getSessions();
  return (
    <>
      {sessions.map(function (rec) {
        const youTubeUrl =
          rec.sessionVideos != null
            ? rec.sessionVideos[0].youTubeUrl
            : undefined;
        return (
          <Suspense key={rec.id} fallback={<div>Loading video...</div>}>
            <VideoComp id={youTubeUrl} />
          </Suspense>
        );
      })}
    </>
  );
}
