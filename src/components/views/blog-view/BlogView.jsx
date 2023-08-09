import React from "react";
import styles from './blogView.module.css';
import ArticleCard from "../../article-card/ArticleCard";
import View from "../view/View";

const BlogView = () => {
    return (
        <View className={styles.blogView}>
            <ArticleCard title="Title" subtitle="Subtitle" />
            <ArticleCard title="Title" subtitle="Subtitle" />
            <ArticleCard title="Title" subtitle="Subtitle" />
            <ArticleCard title="Title" subtitle="Subtitle" />
            <ArticleCard title="Title" subtitle="Subtitle" />
            <ArticleCard title="Title" subtitle="Subtitle" />
            <ArticleCard title="Title" subtitle="Subtitle" />

        </View>
    );
};

export default BlogView;