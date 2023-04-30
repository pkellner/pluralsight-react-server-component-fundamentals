import React from "react";
import styles from "./show-busy-indicator.module.css";

export default function ShowBusyIndicator() {
  return (
    <span className={styles.wrapper}>
      <span className={styles.activity}></span>
      <span style={{ visibility: "hidden" }}>
        place holder - make loading gif placeholder
      </span>
    </span>
  );
}

