import React from "react";
import styles from "./HelloWorld.module.css";

function HelloWorld(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.heading}>
          <h2>{props.name ? `Hello World !!!` : `pass`}</h2>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;