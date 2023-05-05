import "server-only";

import React from "react";
import AppHeader from "./ common/app-header";
import AppFooter from "./ common/app-footer";
import MyComp from "@/src/app/my-comp";

export default function MainApp() {
  return (
      <div className="container py-1">
        <AppHeader />
        <MyComp />
        <AppFooter />
      </div>
  );
}
