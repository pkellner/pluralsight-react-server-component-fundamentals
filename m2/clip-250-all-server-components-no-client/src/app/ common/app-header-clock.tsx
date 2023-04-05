import "server-only"

import Boundary from "@/lib/boundary";

export default function AppHeaderClock({
  isoDateString,
}: {
  isoDateString: string;
}) {


  return (
    <Boundary isServerComponent={false}>
      <p style={{ width: "170px", height: "10px" }} className="text-dark">
        {new Date(isoDateString).toLocaleTimeString()}
      </p>
    </Boundary>
  );
}
