import SessionsManager from "./sessions-manager";

export default function SessionsApp({ sessionData }) {
  return (
    <div>
      <SessionsManager sessionData={sessionData} />
    </div>
  );
}
