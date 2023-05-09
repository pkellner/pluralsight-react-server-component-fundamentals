import "server-only";

import React from "react";
import { SessionData } from "@/lib/ts-interfaces";
import SessionListItemClient from "@/src/app/sessions/session-list-item-client";
import SessionListItem from "@/src/app/sessions/session-list-item";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionVideo(id) {
  const res = await fetch(`...`);
  return await res.json();
}

export default async function SessionsList() {

  


}


export default async function SessionVideos() {
  const videos = await getSessionVideo();
  return (
      <>{videos.map((video) => (
        <SessionVideo video={video} />
      ))}</>
  );
}

async function getVideo(id) {
  // Get video with REST
}

export default async function SessionVideo({ id }) {
  const video = await getVideo(id);
  return (<div>...show video detail</div>)
}
