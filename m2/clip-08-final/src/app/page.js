import "server-only";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeaderClock from "./app-header-clock";
//import useCounter from "@rooks/use-counter"

export default function AppHeader() {
  const isoDateString = new Date().toISOString();

    // const {
    //     value,
    //     incrementBy,
    // } = useCounter(3);

  return (
    <div className="container bg-light text-dark  m-4 w-auto">
      <h2>Clock App</h2>
      <hr />
      <AppHeaderClock isoDateString={isoDateString} />
        {/*<button onClick={() => incrementBy(5)}>increment - {value}</button>*/}
    </div>
  );
}
