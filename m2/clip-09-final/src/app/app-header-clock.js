"use client";

import { useEffect, useState } from "react";
import AppShowSun from "./app-show-sun";
import useCounter from "@rooks/use-counter";

export default function AppHeaderClock({ isoDateString }) {
  const [currentDate, setCurrentDate] = useState(new Date(isoDateString));

  useEffect(() => {
    const incrementSecondsEverySecond = 1; // 1 is default and 3600 makes time go 1 hour for every second
    const interval = setInterval(() => {
      setCurrentDate(
        (oldDate) =>
          new Date(oldDate.getTime() + 1000 * incrementSecondsEverySecond)
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { value, incrementBy } = useCounter(0);

  return (
    <div>
      {new Date(currentDate).toLocaleTimeString()}
      <div>
        <AppShowSun isoDateString={currentDate} />
        <button className="m-3" onClick={() => incrementBy(5)}>
          increment - {value}
        </button>
      </div>
    </div>
  );
}
