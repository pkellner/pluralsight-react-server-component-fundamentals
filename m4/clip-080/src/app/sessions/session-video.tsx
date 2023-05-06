import "server-only";
import getRandomNumber from "@/lib/getRandomNumber";
import { YouTubeData } from "@/lib/ts-interfaces";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionVideo(id: string) {
  await delay(getRandomNumber(1000,4000));
  const res = await fetch(`http://localhost:3000/api/youtubedata/${id}`);
  if (!res.ok) { throw new Error("Failed to fetch data"); }
  const data = await res.json();
  return data;
}

export default async function SessionVideo({ id }: { id: string }) {
  if (!id || id.length === 0) {
    return null;
  }
  const youtubeData: YouTubeData = await getSessionVideo(id);
  return (
    <div className="card">
      <a target="_blank" href={`https://www.youtube.com/watch?v=${id}`}>
        <img
          src={youtubeData?.snippet?.thumbnails?.medium?.url}
          className="card-img-top"
          alt="youtube thumb"
        />
      </a>
      <div
        className="card-body d-flex justify-content-end"
        style={{ backgroundColor: "dimgray", padding: "4px 8px" }}
      >
        <p
          className="card-text fst-italic text-white mb-0"
          style={{ lineHeight: 1, fontSize: "11px" }}
        >
          Views {youtubeData?.statistics?.viewCount ?? "---"}
        </p>
      </div>
    </div>
  );
}
