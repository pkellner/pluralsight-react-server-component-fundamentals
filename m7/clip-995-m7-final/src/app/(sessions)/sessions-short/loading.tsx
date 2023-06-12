import { Session } from "@/app/(sessions)/sessions-short/page";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {[1, 2, 3].map((id) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={id}
          >
            <div className="row">
              <div className="col-9" style={{ visibility: "hidden" }}>
                <Image
                  src="/loading.gif"
                  alt="loading speaker..."
                  width={135}
                  height={15}
                />
              </div>
              <div className="col-3" style={{ visibility: "hidden" }}>
                <Image
                  src="/loading.gif"
                  alt="loading speaker..."
                  width={30}
                  height={15}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
