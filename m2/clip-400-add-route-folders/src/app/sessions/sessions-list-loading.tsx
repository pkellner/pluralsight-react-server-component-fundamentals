import ShowBusyIndicator from "@/lib/show-busy-indicator";
import Boundary from "@/lib/boundary";

export default function SessionsListLoading() {
  return (
    <div className="container">
      <div className="row">
        {[1, 2, 3, 4].map(function (id: number) {
          return (
            <div className="col-md-3 d-flex align-items-stretch" key={id}>
              <Boundary enabled={false}>
                <div className="card m-1">
                  <div className="row g-0">
                    <div className="col-7">
                      <div className="card-body">
                        <h6 className="card-title smaller-item">
                          <ShowBusyIndicator />
                        </h6>
                        <ShowBusyIndicator />
                      </div>
                    </div>
                    <div className="col-5 align-middle mt-2 ">
                      <ShowBusyIndicator />
                    </div>
                  </div>
                </div>
              </Boundary>
            </div>
          );
        })}
      </div>
    </div>
  );
}
