import React, { useState, useEffect } from 'react';
import styles from 'components/views/blog-view/blogView.module.css';
import ArticleCard from 'components/article-card/ArticleCard';
import View from 'components/views/view/View';
import { getArticles2 } from 'services/article.service';
import { CircularProgress } from '@mui/material';
import commonStyles from 'commonStyles.module.css';

const BlogView = () => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchMyData() {
			const result = await getArticles2();
			setArticles(result);
			setLoading(false);
		}
		fetchMyData();
	}, []);

	return (
		<View className={styles.blogView}>
			{loading ? (
				<CircularProgress
					size="60px"
					className={commonStyles.circularProgress}
				/>
			) : (
				<div className={styles.content}>
					{articles?.map((article, index) => {
						return (
							<ArticleCard
								key={index}
								article={article}
								imageUrl={article.image.url}
							/>
						);
					})}
				</div>
			)}
		</View>
	);
};

export default BlogView;
