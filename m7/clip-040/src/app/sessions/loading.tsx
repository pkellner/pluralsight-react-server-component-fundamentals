import SpeakerDetailLoading from
  "@/sessions/speaker-detail-loading";

export default function SessionsLoading() {
  return (
    <div className="container-main">
      <div className="sessions">
        <div className="news-list">
          {[1, 2, 3].map(() => {
            return (
              <li className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">Loading...</h3>
                </div>
                <div className="news-tile__bottom">
                  <SpeakerDetailLoading />
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}