import React from "react";
import styles from "./boundary.module.css";

export default function Boundary({
  enabled = true,
  isServerComponent = false,
  children,
}: {
  enabled?: boolean;
  isServerComponent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        enabled ? isServerComponent
            ? styles.borderRsc
            : styles.borderRcc : styles.borderInvisible
      }
    >
      {children}
    </div>
  );
}
