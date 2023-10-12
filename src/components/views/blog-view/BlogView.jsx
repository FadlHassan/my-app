import React, { useState, useEffect } from 'react';
import styles from 'components/views/blog-view/blogView.module.css';
import ArticleCard from "components/article-card/ArticleCard";
import View from 'components/views/view/View';
import { getArticles } from "services/article.service";

const BlogView = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMyData() {
            const result = await getArticles();
            setArticles(result);
            setLoading(false);
        }
        fetchMyData();
      }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <View>
            <div className={styles.content}>
                {
                    articles?.map((article) => {
                        return <ArticleCard title={article.title} subtitle={article.subtitle} />
                    })
                }
            </div>
        </View>
    );
};

export default BlogView;