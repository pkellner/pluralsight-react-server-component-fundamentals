import React from "react";
import styles from "./boundary.module.css";

export default function Boundary({
  enabled = true,
  isServerComponent = false,
  children,
}: {
  enabled?: boolean;
  isServerComponent: boolean;
  children: React.ReactNode;
}) {
  if (!enabled) {
    return <div>{children}</div>;
  }

  return (
    <>
      <div className={isServerComponent ? styles.borderRsc : styles.borderRcc}>
        {children}
      </div>
    </>
  );
}
