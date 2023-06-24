import Image from "next/image";

export default function Loading() {
  return (
    <>
      {[1, 2, 3].map((id) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={id}
          >
            <Image
              src="/placeholder-text.gif"
              height="20"
              width="300"
              alt="Speakers Loading"
            />
          </div>
        );
      })}
    </>
  );
}
