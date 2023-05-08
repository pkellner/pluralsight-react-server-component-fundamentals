import "server-only";
import youtubeDataAll from "../../../data/youtubedata.json";

export default function SessionVideo({ id }: { id: string }) {
  if (!id || id.length === 0) {
    return null;
  }
  const youtubeData = youtubeDataAll.data.youTubeData.find(rec => rec.id === id);
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
