import React from "react";
import styles from './view.module.css';

const View = ({ className, children }) => {
    return (
        <div className={`${styles.view} ${className}`}>
            {children}
        </div>
    );
}

export default View;