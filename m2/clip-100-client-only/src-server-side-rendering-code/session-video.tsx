import { useEffect, useState } from "react";
import ShowBusyIndicator from "@/lib/show-busy-indicator";

export default function SessionVideo({ id }) {
  const [data, setData] = useState<{
    id: string;
    snippet: {
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
    statistics: {
      viewCount: string;
      likeCount: string;
    };
  }>();

  if (!id) {
    return null;
  }

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

  return data ? (
    <>
      <div className="row">
        <div className="col-5">
          <a target="_blank" href={`https://www.youtube.com/watch?v=${id}}`}>
            <img
              src={data?.snippet?.thumbnails?.medium?.url}
              width={100}
              alt="youtube thumb"
            />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 text-secondary">
          Views: {data?.statistics?.viewCount}
        </div>
      </div>
    </>
  ) : (
    <ShowBusyIndicator />
  );
}
