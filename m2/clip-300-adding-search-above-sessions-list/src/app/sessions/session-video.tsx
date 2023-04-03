import "server-only"
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";
import {IYouTubeData} from "@/lib/ts-interfaces";
import getRandomNumber from "@/lib/getRandomNumber";

export const dynamic = 'force-dynamic';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



async function getSessionVideo(id: string) {
  await delay(getRandomNumber(1500, 3500));
  const res = await fetch(`http://localhost:3000/api/youtubedata/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function SessionVideo({ id }: { id?: string }) {
  if (!id) {
    return null;
  }

  const data : IYouTubeData = await getSessionVideo(id);

  return data ? (
    <Boundary isServerComponent={true}>
      <div className="row">
        <div className="col-md-6">
          <a target="_blank" href={`https://www.youtube.com/watch?v=${id}}`}>
            <img
              src={data?.snippet?.thumbnails?.medium?.url}
              width={100}
              alt="youtube thumb"
            />
          </a>
        </div>
        <div className="col-md-6 fst-italic fs-6">
          Views {data?.statistics?.viewCount}
        </div>
      </div>
    </Boundary>
  ) : (
    <ShowBusyIndicator />
  );
}
