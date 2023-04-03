import {ISessionData, IYouTubeData} from "@/lib/ts-interfaces";
import SessionsApp from "../src-server-side-rendering-code-OLD/sessions-app";

export default function ServerSideRenderingCode({
  sessionData,
  youTubeData,
}: {
  sessionData: ISessionData[];
  youTubeData: IYouTubeData[];
}) {
  return <SessionsApp sessionData={sessionData} youTubeData={youTubeData} />;
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/sessiondata`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const sessionData = await res.json();
  const youTubeRecs = [];
  for (const rec of sessionData) {
    if (
      rec?.sessionVideos &&
      rec.sessionVideos.length > 0 &&
      rec.sessionVideos[0].youTubeUrl
    ) {
      const res = await fetch(
        `http://localhost:3000/api/youtubedata/${rec.sessionVideos[0].youTubeUrl}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      youTubeRecs.push(data);
    }
  }
  return { props: { sessionData, youTubeData: youTubeRecs } };
}
