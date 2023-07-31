import React from "react";
import HeaderBar from "../../header-bar/HeaderBar";
import styles from "./view.module.css";

const View = ({ className, children }) => {
    return (
        <div className={styles.view}>
            <HeaderBar />
            <div className={`${styles.content} ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default View;