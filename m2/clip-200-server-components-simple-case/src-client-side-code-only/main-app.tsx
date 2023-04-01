import {useEffect, useState} from "react";
import SessionsManager from "./sessions-manager";
import { ISessionData } from "@/lib/ts-interfaces";


export default function SessionsApp() {
  const [data, setData] = useState<
    ISessionData[]
  >();

  useEffect(() => {
    async function getDataAsync() {
      const res = await fetch(`http://localhost:3000/api/sessiondata`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setData(data);
    }
    getDataAsync().then(() => console.log("success"));
  }, []);

  return (
    <div>
      <SessionsManager sessionData={data} />
    </div>
  );
}
