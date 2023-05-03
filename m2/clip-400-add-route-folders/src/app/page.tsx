import "server-only";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styles.css";

import Boundary from "@/lib/boundary";
import AppHeader from "./ common/app-header";
import React from "react";
import AppFooter from "./ common/app-footer";
import SessionsManager from "./sessions/sessions-manager";
import QueryProvider from "@/src/app/contexts/query-provider";

export default function MainApp() {
  return (
    <div className="container py-1">
      <Boundary isServerComponent={true}>
        <AppHeader />
        <QueryProvider>
          <SessionsManager />
        </QueryProvider>
        <AppFooter />
      </Boundary>
    </div>
  );
}
