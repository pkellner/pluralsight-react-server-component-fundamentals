"use client";

import { useEffect, useState } from "react";

export default function SessionVideo({ id }) {
  console.log(`SessionVideo:`, id);

  // if (!id) {
  //   return <div>NO IMAGE</div>;
  // } else {
  //   return <div>{id}</div>;
  // }

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

  console.log(`http://localhost:3001/api/youtubedata/${id}`);

  useEffect(() => {
    async function getDataAsync() {
      const res = await fetch(`http://localhost:3001/api/youtubedata/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await res.json();
      console.log(json);
      setData(json);
    }
    getDataAsync().then(() => console.log("success"));
  }, [id]);

  return (
    <>
      {id && (
        <a target="_blank" href={`https://www.youtube.com/watch?v=${id}}`}>
          <img
            // src={`/images/youTubeThumbs/${id}-medium-16x9.jpg`}
            src={data?.snippet?.thumbnails?.medium?.url}
            width={100}
            alt="youtube thumb"
          />
        </a>
      )}
    </>
  );
}
