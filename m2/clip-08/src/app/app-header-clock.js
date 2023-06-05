"use client";

import { useEffect, useState } from "react";

export default function AppHeaderClock({ isoDateString }) {
  const [currentDate, setCurrentDate] = useState(new Date(isoDateString));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((oldDate) => new Date(oldDate.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{new Date(currentDate).toLocaleTimeString()}</div>;
}
