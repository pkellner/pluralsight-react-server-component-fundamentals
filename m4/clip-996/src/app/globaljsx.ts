import * as React from "react";

declare global {
  namespace JSX {
    export type ElementType = React.ReactNode | Promise<React.ReactNode>;
  }
}
