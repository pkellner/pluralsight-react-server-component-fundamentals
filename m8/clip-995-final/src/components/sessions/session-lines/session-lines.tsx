import { sessionsData } from "@/common/sessions-data";
import React from "react";

import { Session } from "@/common/code-camp-interfaces";
import Link from "next/link";

export default  function SessionLines() {

  return (
    <>
      {sessionsData.map((session: Session) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={session.id} >
            <div className="row">
              <div className="col-9">{session?.title}</div>
              <div className="col-3">
                <Link href={`/speakers/${session.speakerId}`}>
                  Speaker
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
