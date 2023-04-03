import React from "react";
import styles from "./boundary.module.css";

export default function Boundary({
  enabled = false,
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

  return <div className={getClassName()}>{children}</div>;
}
