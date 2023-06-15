import "server-only";
import Image from "next/image";

export default async function SpeakerDetailLoading() {
  return (
    <div className="col-12 col-sm-6 speakers-list-item">
      <div className="events-speaker d-flex align-items-center">
        <div className="events-speaker-photo">
          <Image
            src="/loading.gif"
            alt="loading speaker..."
            width={135}
            height={135}
          />
        </div>
        <div
          className="events-speaker-description"
          style={{ visibility: "hidden" }}
        >
          SpeakerFirst SpeakerLast
        </div>
      </div>
    </div>
  );
}
