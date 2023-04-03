import "server-only";
import Boundary from "@/lib/boundary";
import {IYouTubeData} from "@/lib/ts-interfaces";
import jsonData from "../../../data/youtubedata.json";


function getSessionVideo(id : string) {
  const videoData = jsonData.data.youTubeData.find(video => video.id === id);

  if (!videoData) {
    throw new Error("Failed to fetch data");
  }

  return videoData;
}

export default function SessionVideo({ id }: { id?: string }) {
  if (!id) {
    return null;
  }

  const data: IYouTubeData = getSessionVideo(id);

  return (
      <Boundary isServerComponent={true}>
        <div className="card">
          <a target="_blank" href={`https://www.youtube.com/watch?v=${id}`}>
            <img
                src={data?.snippet?.thumbnails?.medium?.url}
                className="card-img-top"
                alt="youtube thumb"
            />
          </a>
          <div
              className="card-body d-flex justify-content-end"
              style={{ backgroundColor: "dimgray", padding: "4px 8px" }}
          >
            <p className="card-text fst-italic text-white mb-0" style={{ lineHeight: 1, fontSize: "11px" }}>
              Views {data?.statistics?.viewCount}
            </p>
          </div>
        </div>
      </Boundary>
  );


}
