import React from "react";
import styles from './blogView.module.css';
import ArticleCard from "../../article-card/ArticleCard";
import View from "../view/View";

const BlogView = () => {
    return (
        <View>
            <div className={styles.content}>
                <ArticleCard title="Title" subtitle="Subtitle" />
                <ArticleCard title="Title" subtitle="Subtitle" />
                <ArticleCard title="Title" subtitle="Subtitle" />
                <ArticleCard title="Title" subtitle="Subtitle" />
                <ArticleCard title="Title" subtitle="Subtitle" />
                <ArticleCard title="Title" subtitle="Subtitle" />
                <ArticleCard title="Title" subtitle="Subtitle" />
            </div>
        </View>
    );
};

export default BlogView;