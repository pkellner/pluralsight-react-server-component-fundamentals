"use client";
export default function AppHeaderClock()
{

  const date = new Date();
  return (
      <p className="text-dark">
        {date.toLocaleString()}
      </p>
  );
}