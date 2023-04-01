"use client";

import {useEffect, useState} from "react";
import Boundary from "@/lib/boundary";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
//
// async function getCurrentTime() {
//   await delay(2000);
//   const currentTime = new Date();
//   return currentTime.toLocaleString();
// }

export default function MainAppHeaderClock({
  isoDateString,
}: {
  isoDateString: string;
}) {
  const [date, setDate] = useState(new Date(isoDateString));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((oldDate) => new Date(oldDate.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Boundary isServerComponent={false}>
      {/*<Suspense fallback={<div>Loading...(MainAppHeaderClock)</div>}>*/}
      <p style={{ width: "170px", height: "10px" }} className="text-dark">
        {date.toLocaleString()}
      </p>
      {/*</Suspense>*/}
    </Boundary>
  );
}
