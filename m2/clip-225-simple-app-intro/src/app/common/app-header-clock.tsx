import "server-only";

import Boundary from "@/lib/boundary";
import { useEffect, useState } from "react";

export default function AppHeaderClock({
  isoDateString,
}: {
  isoDateString: string;
}) {
  const [currentTime, setCurrentTime] = useState(new Date(isoDateString));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((oldDate) => new Date(oldDate.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Boundary isServerComponent={true}>
      <p style={{ width: "170px", height: "10px" }} className="text-dark">
        {new Date(isoDateString).toLocaleTimeString()}
      </p>
    </Boundary>
  );
}
