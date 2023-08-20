import React from "react";
import styles from './view.module.css';

const View = ({ className, children }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
}

export default View;