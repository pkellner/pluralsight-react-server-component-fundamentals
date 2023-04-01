import { useEffect, useState } from "react";
import ShowBusyIndicator from "@/lib/show-busy-indicator";
import { IYouTubeData } from "@/lib/ts-interfaces";
import Boundary from "@/lib/boundary";

export default function SessionVideo({ id } : { id?: string}) {
  const [data, setData] = useState<IYouTubeData>();

  useEffect(() => {
    async function getDataAsync() {
      const res = await fetch(`http://localhost:3000/api/youtubedata/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await res.json();
      console.log(json);
      setData(json);
    }
    getDataAsync().then(() => console.log("success"));
  }, [id]);

  if (!id) {
    return null;
  }

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
          Views: {data?.statistics?.viewCount}
        </div>
      </div>
    </Boundary>
  ) : (
    <ShowBusyIndicator />
  );
}
