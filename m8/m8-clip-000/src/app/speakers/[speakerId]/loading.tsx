import Image from "next/image";

export default function Loading() {
  return (
    <div className="container-main speakers">
      <div className="row">
        {[1].map((id) => {
          return (
            <div className="col-sm-12 col-lg-6 speakers-list-item" key={id}>
              <div className="events-speaker d-flex align-items-center">
                <div className="events-speaker-photo">
                  <Image
                    src="/loading.gif"
                    alt="speaker loading"
                    width={135}
                    height={135}
                  />
                </div>
                <div className="events-speaker-description">
                  <div className="name">
                    <Image
                      src="/placeholder-text.gif"
                      alt="speaker name loading..."
                      width="100"
                      height="15"
                    />
                  </div>
                  <div className="bio">
                    <Image
                      src="/placeholder-text.gif"
                      alt="speaker bio loading..."
                      width="150"
                      height="40"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
