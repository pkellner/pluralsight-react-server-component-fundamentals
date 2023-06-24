export default function AppHeaderClock({ isoDateString }) {
  return <div>{new Date(isoDateString).toLocaleTimeString()}</div>;
}
