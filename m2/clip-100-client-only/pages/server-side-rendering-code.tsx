import SessionsApp from "../src-server-side-rendering-code/sessions-app";

export default function ServerSideRenderingCode({ sessionData }) {
  return <SessionsApp sessionData={sessionData} />;
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/sessiondata`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  return { props: { sessionData: json } };
}
