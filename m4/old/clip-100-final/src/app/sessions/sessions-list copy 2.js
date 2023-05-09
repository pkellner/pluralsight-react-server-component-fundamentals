import "server-only";

import React from "react";

async function getSessions() {
  return [{id: "1",title: "abc"}];
}

async function getVideo({id}) {
  return {id: "101", title: "video 101"};
}

export default async function App() {

  const sessions = await getSessions();
  return (
    <SessionsListComp sessions={sessions}  />
  )
}

async function VideoComp({id}) {
  const video = await getVideo(id);
  return (
    <div>
      {video.title}
    </div>
  )

}

async function SessionsListComp({sessions}) {
  return (
    <>{sessions.map(function (rec) {
      return (
        <VideoComp key={rec.id} id={rec.id} />
      );
    })}</>
  )
}









/*
return (
    <>{sessionsList.map(function (rec) {
      return (
        <Video id={rec.id} />
      );
    })}</>
  )
  */


// export default async function SessionVideos() {
//   const videos = await getSessionVideo();
//   return (
//       <>{videos.map((video) => (
//         <SessionVideo video={video} />
//       ))}</>
//   );
// }
