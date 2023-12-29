import React, { useState, useEffect } from 'react';
import styles from 'components/views/article-view/articleView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import View from 'components/views/view/View';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { getArticle2 } from 'services/article.service';

const ArticleView = () => {
	const { slug } = useParams();
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
	const isMobile = useMediaQuery({ maxWidth: 480 });

	useEffect(() => {
		async function fetchMyData() {
			const result = await getArticle2(slug);
			setArticle(result);
			setLoading(false);
		}
		fetchMyData();
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<View>
			<div className={styles.content}>
				<div className={styles.imageContainer}>
					<img src={article.image.url} alt="ArticleImage" />
				</div>
				<div className={styles.articleContent}>
					<div className={styles.titleDescription}>
						<Typography
							variant={
								isMobile
									? TypographyVariants.HEADING_L
									: TypographyVariants.HEADING_XL
							}
							color={styles.titleColor}
						>
							{article.title}
						</Typography>
						{/* <Typography
							variant={
								isMobile
									? TypographyVariants.HEADING_S
									: TypographyVariants.HEADING_M
							}
							color={styles.titleColor}
						>
							{article.subtitle}
						</Typography> */}
					</div>
					<div
						className={styles.articleText}
						dangerouslySetInnerHTML={{
							__html: article.content.html,
						}}
					/>
				</div>
			</div>
		</View>
	);
};

export default ArticleView;
