import { sessionsData } from "@/common/sessions-data";
import SpeakerDetail from "./speaker-detail";
import React from "react";

import { Session } from "@/common/code-camp-interfaces";

export default  function SessionGrid() {

  return (
    <div className="container-main">
      <div className="sessions">
        <ul className="news-list">
          {sessionsData.map((session: Session) => {
            return (
              <li key={session.id} className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">{session?.title}</h3>
                  {session?.description}
                </div>
                <div className="news-tile__bottom">
                  <SpeakerDetail speakerId={session.speakerId ?? "0"} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
