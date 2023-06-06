import "server-only";

import React, { Suspense } from "react";

import AppHeader from "./ common/app-header";
import AppFooter from "./ common/app-footer";
import SessionsList from "@/src/app/sessions/sessions-list";

import SessionsQuery from "@/src/app/sessions/sessions-query";
import QueryProvider from "@/src/app/contexts/query-provider";

export default function MainApp() {
  return (
    <div className="container py-1">
      <AppHeader />
      <Suspense fallback={<SessionsListLoading />}>
        <QueryProvider>
          <SessionsQuery />
          <SessionsList />
        </QueryProvider>
      </Suspense>
      <AppFooter />
    </div>
  );
}

function SessionsListLoading() {
  return (
    <div className="container">
      <div className="row">
        {[1, 2, 3].map(function (id: number) {
          return (
            <div className="container" key={id}>
              <div className="row">
                <div className="col-12 " key={id}>
                  <div className="card m-1">
                    <div className="row g-0">
                      <div className="col-7">
                        <div className="card-body">
                          <span className="wrapper">
                            <span style={{ visibility: "hidden" }}>
                              place holder - This represents the amount of text
                              that will be shown
                            </span>
                          </span>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
