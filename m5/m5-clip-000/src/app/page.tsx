import "server-only";

import React from "react";

import AppHeader from "./ common/app-header";
import AppFooter from "./ common/app-footer";
import SessionsList from "@/src/app/sessions/sessions-list";

// Force dynamic rendering to prevent build-time fetch errors in Next.js 16+
export const dynamic = 'force-dynamic';

export default function MainApp() {
  return (
    <div className="container py-1">
      <AppHeader />
      <SessionsList />
      <AppFooter />
    </div>
  );
}
