import "server-only";

import React from "react";
import Boundary from "@/lib/boundary";

export default function AppFooter() {
  return (
    <Boundary isServerComponent={true}>
      <footer className="bg-light py-1 mt-1">
        <div className="container">
          <p className="text-muted text-center mb-0">
            &copy; 2023 SV Code Camp. All rights reserved.
          </p>
        </div>
      </footer>
    </Boundary>
  );
}