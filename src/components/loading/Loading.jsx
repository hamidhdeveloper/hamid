import React from "react";
import styles from "./Loading.module.css";
const Loading = ({ showLoading }) => {
  return (
    <>
    {showLoading && (
      <>
      <div className={styles.preloader}>
        <span>{'{'}</span>
        <span>{'}'}</span>
      </div>
      </>
      )}
    </>
  );
};

export default Loading;
