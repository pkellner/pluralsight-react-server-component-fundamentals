import Boundary from "@/lib/boundary";
import MainAppHeaderClock from "./main-app-header-clock";

export default function MainAppHeader() {


  return (
    <Boundary>
      <header className="bg-light py-1">
        <div className="container">
          <div className="d-flex justify-content-between align-items-top">
            <h3 className="text-dark m-2" >SV Code Camp List</h3>
            <MainAppHeaderClock />
          </div>
        </div>
      </header>
    </Boundary>
  );
}
