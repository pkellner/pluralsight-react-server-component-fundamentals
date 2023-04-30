import React from "react";
import styles from "./boundary.module.css";

const hideAllBorders = true;

export default function Boundary({
  enabled = true,
  isServerComponent = false,
  borderCustom = false,
  children,
}: {
  enabled?: boolean;
  isServerComponent?: boolean;
  borderCustom?: boolean;
  children: React.ReactNode;
}) {
  const getClassName = () => {
    switch (true) {
      case enabled && borderCustom:
        return styles.borderCustom;
      case enabled && isServerComponent:
        return styles.borderRsc;
      case enabled && !isServerComponent && !borderCustom:
        return styles.borderRcc;

      default:
        return styles.borderInvisible;
    }
  };

  return hideAllBorders ? (
    <div>{children}</div>
  ) : (
    <div className={getClassName()}>{children}</div>
  );
}
