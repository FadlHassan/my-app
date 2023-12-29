import React from 'react';
import styles from 'components/article-card/articleCard.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import myImage from 'images/landing-page-girl.jpg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const ArticleCard = ({ article, imageUrl }) => {
	const isMobile = useMediaQuery({ maxWidth: 480 });

	return (
		<Link to={`/article/${article.id}`} className={styles.articleCard}>
			<div className={styles.imageContainer}>
				<img src={imageUrl || myImage} alt="ArticleCardImage" />
			</div>
			<div className={styles.titleDescription}>
				<Typography
					variant={
						isMobile
							? TypographyVariants.HEADING_M
							: TypographyVariants.HEADING_L
					}
					color={styles.titleColor}
				>
					{article.title}
				</Typography>
			</div>
		</Link>
	);
};

export default ArticleCard;
