"use client";

import { useEffect } from "react";

export default function MyAnimation() {
  useEffect(() => {
    console.log("MyAnimation mounted");
    return () => console.log("MyAnimation unmounted");
  }, []);

  return (
    <div>
      <h1>My Animation</h1>
    </div>
  );
}
