import { ISessionData, IYouTubeData } from "@/lib/ts-interfaces";
import SessionsManager from "./sessions-manager";

export default function SessionsApp({
  sessionData,
  youTubeData,
}: {
  sessionData?: ISessionData[];
  youTubeData: IYouTubeData[];
}) {
  return (
    <div>
      <SessionsManager sessionData={sessionData} youTubeData={youTubeData} />
    </div>
  );
}
