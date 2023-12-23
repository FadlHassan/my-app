import React, { useState, useEffect } from 'react';
import styles from 'components/views/blog-view/blogView.module.css';
import ArticleCard from "components/article-card/ArticleCard";
import View from 'components/views/view/View';
import { getArticles, loadAllImages } from "services/article.service";

const BlogView = () => {
    const [articles, setArticles] = useState(null);
    const [imageUrls, setImageUrls] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMyData() {
            const result = await getArticles();
            const imageUrls = await loadAllImages();
            setArticles(result);
            setImageUrls(imageUrls);
            setLoading(false);
        }
        fetchMyData();
      }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <View>
            <div className={styles.content}>
                {
                    articles?.map((article, index) => {
                        return (
                            <ArticleCard key={index} article={article} imageUrl={imageUrls[article.id]}/>
                        );
                    })
                }
            </div>
        </View>
    );
};

export default BlogView;