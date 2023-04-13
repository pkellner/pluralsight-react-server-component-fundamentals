"use client";

import { useEffect, useState } from "react";
import AppShowSun from "./app-show-sun";

export default function AppHeaderClock({ isoDateString, children }) {
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

  return (
    <div>
      {new Date(currentDate).toLocaleTimeString()}
      <div>
        {/*<AppServerComponent /> FAIL*/}
        <AppShowSun isoDateString={currentDate}></AppShowSun>
        {children}
      </div>
    </div>
  );
}
