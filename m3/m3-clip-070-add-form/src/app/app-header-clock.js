"use client";
import { useCounter } from "rooks";
import AppShowSun from "./app-show-sun";
import { useEffect, useState } from "react";

export default function AppHeaderClock({ isoDateString, children }) {
  const [currentDate, setCurrentDate] = useState(new Date(isoDateString));
  const { value, incrementBy } = useCounter(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((oldDate) => new Date(oldDate.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {new Date(currentDate).toLocaleTimeString()}
      <div>
        {children}
        <AppShowSun isoDateString={currentDate} />
        <button
          className="btn btn-secondary m-2"
          onClick={() => incrementBy(5)}
        >
          increment {value}
        </button>
      </div>
    </div>
  );
}
