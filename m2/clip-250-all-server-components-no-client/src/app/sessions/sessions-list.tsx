import "server-only";
import Boundary from "@/lib/boundary";
import {ISessionData} from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";
import jsonData from "../../../data/sessions.json";

const maxToShow = 9;

export default function SessionsList() {
  interface IRawSessionData {
    id: string;
    title: string;
    descriptionShort: string;
    sessionVideos: { youTubeUrl: string }[] | null;
  }

  const sessions: ISessionData[] = jsonData.data.sessions.slice(0,maxToShow).map(
    (session: IRawSessionData) => {
      return {
        id: session.id,
        title: session.title,
        descriptionShort: session.descriptionShort,
        sessionVideos: session.sessionVideos,
      };
    }
  );

  return (
    <Boundary isServerComponent={true}>
      <div className="container">
        <div className="row">
          {sessions.map(function (rec: ISessionData) {
            return <SessionListItem key={rec.id} rec={rec} />;
          })}
        </div>
      </div>
    </Boundary>
  );
}
