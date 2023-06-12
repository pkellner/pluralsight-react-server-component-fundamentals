import * as React from "react";

declare module "react" {
  namespace JSX {
    export type ElementType =
      | ((props: any) => React.ReactNode | Promise<React.ReactNode>)
      | (new (props: any) => React.ReactNode)
      | keyof React.JSX.IntrinsicElements;
  }
}
