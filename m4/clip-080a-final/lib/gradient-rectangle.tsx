import React from 'react';
import styles from "./gradient-rectangle.module.css";

const GradientRectangle = () => {
  return (
    <div className={styles["gradient-container"]}>
      <div className={styles["gradient-rectangle"]}></div>
    </div>
  );
};

export default GradientRectangle;
