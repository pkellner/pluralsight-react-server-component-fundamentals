import {useEffect, useState} from "react";
import Boundary from "@/lib/boundary";

export default function MainAppHeaderClock() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Boundary>
      <p style={{width: "170px", height: "10px"}} className="text-dark">{date.toLocaleString()}</p>
    </Boundary>
  );
}
