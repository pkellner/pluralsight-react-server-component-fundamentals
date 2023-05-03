"use client";
import { YouTubeData } from "@/lib/ts-interfaces";
import getRandomNumber from "@/lib/getRandomNumber";
import { useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SessionVideo({ id }: { id?: string }) {
  const [youtubeData, setYoutubeData] = useState<YouTubeData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(id: string) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/youtubedata/${id}`
        );
        const data = await response.json();
        setYoutubeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(id ?? "").then(() => {});
  }, []);

  if (!id) {
    return null;
  }

  return (
    <div className="card">
      <a target="_blank" href={`https://www.youtube.com/watch?v=${id}`}>
        {loading ? (
          <div
            className="spinner"
            style={{ width: "105px", height: "105px" }}
          ></div>
        ) : (
          <img
            src={youtubeData?.snippet?.thumbnails?.medium?.url}
            className="card-img-top"
            alt="youtube thumb"
          />
        )}
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
