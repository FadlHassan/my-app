import React from "react";
import HeaderBar from "../../header-bar/HeaderBar";
import styles from "./view.module.css";

const View = ({ className, children, viewStyle }) => {
    return (
        <div className={styles.view} style={viewStyle}>
            <HeaderBar />
            <div className={`${styles.content} ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default View;