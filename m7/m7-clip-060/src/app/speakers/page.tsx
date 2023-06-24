export default function Speakers() {
  return (
    <div className="container-main speakers">
      <div className="row">
        {[1, 2, 3].map((speakerId) => {
          return (
            <div
              className="col-sm-12 col-lg-6 speakers-list-item"
              key={speakerId}
            >
              Speaker {speakerId}
            </div>
          );
        })}
      </div>
    </div>
  );
}
