import React, { useEffect, useState } from "react";
import SessionsManager from "./sessions-manager";
import { ISessionData } from "@/lib/ts-interfaces";
import MainAppHeader from "./main-app-header";
import MainAppFooter from "./main-app-footer";
import Boundary from "@/lib/boundary";

export default function MainApp() {
  const [data, setData] = useState<ISessionData[]>();

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
    <Boundary>
      <div className="container py-1">
        <MainAppHeader />
        <SessionsManager sessionData={data} />
        <MainAppFooter />
      </div>
    </Boundary>
  );
}
