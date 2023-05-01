import React from "react";
import HeaderBar from "../../header-bar/HeaderBar";
import styles from './blogView.module.css';
import ArticleCard from "../../article-card/ArticleCard";

const BlogView = () => {
    return (
        <div className={styles.blogView}>
            <HeaderBar/>
            <ArticleCard title="Title" subtitle="Subtitle" />
        </div>
    );
};

export default BlogView;