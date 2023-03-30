import {useEffect, useState} from "react";
import SessionsManager from "./sessions-manager";

export default function SessionsApp() {
  const [data, setData] = useState<
    [
      {
        id: string;
        title: string;
        descriptionShort: string;
        sessionVideos: [{ youTubeUrl: string }];
      }
    ]
  >();

  useEffect(() => {
    async function getDataAsync() {
      const res = await fetch(`http://localhost:3001/api/sessiondata`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await res.json();
      console.log(json);
      setData(json);
    }
    getDataAsync().then(() => console.log("success"));
  }, []);

  return (
    <div>
      <SessionsManager sessionData={data} />
    </div>
  );
}
