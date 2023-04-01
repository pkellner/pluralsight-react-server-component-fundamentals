import React from "react";
import styles from "./boundary.module.css";

export default function Boundary({
  enabled = true,
  isServerComponent = true,
  children,
}: {
  enabled?: boolean;
  isServerComponent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        !enabled
          ? styles.borderInvisible
          : isServerComponent
          ? styles.borderRsc
          : styles.borderRcc
      }
    >
      {children}
    </div>
  );
}
