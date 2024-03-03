import React, { useState, useEffect } from 'react';
import styles from 'components/views/article-view/articleView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import View from 'components/views/view/View';
import { useParams } from 'react-router-dom';
import { getArticle2 } from 'services/article.service';
import { CircularProgress } from '@mui/material';
import commonStyles from 'commonStyles.module.css';
import {
	capitalizeFirstLetterOfEachWord,
	formatDate,
} from 'services/format.service';
import usePageTitle from 'hooks/title';

const ArticleView = () => {
	const { slug } = useParams();
	const [article, setArticle] = useState(null);
	usePageTitle(capitalizeFirstLetterOfEachWord(article?.title || 'Article'));
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchMyData() {
			const result = await getArticle2(slug);
			setArticle(result);
			setLoading(false);
		}
		fetchMyData();
	}, []);

	return (
		<View className={styles.articleView}>
			{loading ? (
				<CircularProgress
					size="60px"
					className={commonStyles.circularProgress}
				/>
			) : (
				<div className={styles.content}>
					<div className={styles.imageContainer}>
						<img src={article?.image.url} alt="ArticleImage" />
					</div>
					<div className={styles.articleContent}>
						<div className={styles.titleDescription}>
							<Typography
								variant={TypographyVariants.HEADING_XL}
								bold
							>
								{article?.title}
							</Typography>
							<Typography
								variant={TypographyVariants.DESCRIPTION}
								bold
							>
								{formatDate(article?.datePosted)}
							</Typography>
						</div>
						<div
							className={styles.articleText}
							dangerouslySetInnerHTML={{
								__html: article?.content.html,
							}}
						/>
					</div>
				</div>
			)}
		</View>
	);
};

export default ArticleView;
