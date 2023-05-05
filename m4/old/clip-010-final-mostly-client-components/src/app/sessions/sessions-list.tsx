"use client";
import {SessionData} from "@/lib/ts-interfaces";
import SessionListItem from "@/src/app/sessions/session-list-item";
import {useEffect, useState} from "react";

export default function SessionsList() {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/sessiondata?max=11"
        );
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData().then(() => console.log("done"));
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <div className="row">
        {sessions?.map(function (rec: SessionData) {
          return <SessionListItem key={rec.id} rec={rec} />;
        })}
      </div>
    </div>
  );
}
