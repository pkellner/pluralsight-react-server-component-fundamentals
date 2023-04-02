import "server-only";

import Boundary from "@/lib/boundary";
import MainAppHeader from "./main-app-header";
import React from "react";
import MainAppFooter from "./main-app-footer";
import SessionsManager from "./sessions-manager";
import QueryProvider from "@/src/app/contexts/query-provider";

export default function MainApp() {
  return (
    <Boundary isServerComponent={true}>
      <div className="container py-1">
        <MainAppHeader />
        <QueryProvider>
          <SessionsManager />
        </QueryProvider>
        <MainAppFooter />
      </div>
    </Boundary>
  );
}
