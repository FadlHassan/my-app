import React from "react";
import styles from './articleView.module.css';
import HeaderBar from "../../header-bar/HeaderBar";

const ArticleView = () => {
    return (
        <div className={styles.articleView}>
            <HeaderBar/>
        </div>
    );
};

export default ArticleView;
