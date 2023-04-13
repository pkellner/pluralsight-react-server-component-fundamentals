import "server-only";

// this is boring.
// THIS COULD HAVE ASYNC STUFF IN IT, LIKE MAYBE SOMETHING THAT GETS WEATHER DATA, BENEFIT IS NO COMPLEX API ON CLIENT FOR THIS
//   TALK ABOUT ASYNC IN SERVER COMPONENTS COMING UP IN NEXT MODULE

export default function AppServerComponent() {
  return (
    <div className="container">
      <h2>I'm a Server Component</h2>
    </div>
  );
}
