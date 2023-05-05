import "server-only";

import React, { Suspense } from "react";

import AppHeader from "./ common/app-header";
import AppFooter from "./ common/app-footer";
import SessionsList from "@/src/app/sessions/sessions-list";
import ShowBusyIndicator from "@/lib/show-busy-indicator";

export default function MainApp() {
  return (
    <div className="container py-1">
      <AppHeader />
      <Suspense fallback={<SessionsListLoading />}>
        <SessionsList />
      </Suspense>
      <AppFooter />
    </div>
  );
}

function SessionsListLoading() {
  return (
    <div className="container">
      <div className="row">
        {[1, 2, 3, 4].map(function (id: number) {
          return (
            <div className="container">
              <div className="row">
                {[1, 2, 3, 4].map(function (id: number) {
                  return (
                    <div className="col-12 " key={id}>
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
                            <div className="card m-1">
                              <a target="#">
                                <div
                                  className="spinner"
                                  style={{ width: "105px", height: "105px" }}
                                ></div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
