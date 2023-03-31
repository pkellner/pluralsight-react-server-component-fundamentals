import SessionsManager from "./sessions-manager";

export default function SessionsApp({ sessionData, youTubeData }) {
  return (
    <div>
      <SessionsManager sessionData={sessionData} youTubeData={youTubeData} />
    </div>
  );
}
