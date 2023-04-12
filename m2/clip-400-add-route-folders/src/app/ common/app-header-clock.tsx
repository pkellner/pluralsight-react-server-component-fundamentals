"use client";

import {useEffect, useState} from "react";
import Boundary from "@/lib/boundary";

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
    <Boundary isServerComponent={false}>
      <p style={{ width: "170px", height: "10px" }} className="text-dark">
        {currentTime.toLocaleTimeString()}
      </p>
    </Boundary>
  );
}
