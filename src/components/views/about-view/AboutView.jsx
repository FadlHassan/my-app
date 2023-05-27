import React from "react";
import styles from './aboutView.module.css';
import HeaderBar from "../../header-bar/HeaderBar";

const AboutView = () => {
    return (
        <div className={styles.aboutView}>
            <HeaderBar />
        </div>
    );
};

export default AboutView;