import React from 'react';
import styles from 'components/article-card/articleCard.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
	capitalizeFirstLetterOfEachWord,
	formatShortDate,
} from 'services/format.service';

const ArticleCard = ({ article, imageUrl }) => {
	const isMobile = useMediaQuery({ maxWidth: 480 });

	return (
		<Link to={`/article/${article.slug}`} className={styles.articleCard}>
			<div className={styles.imageContainer}>
				<img src={imageUrl} alt="ArticleCardImage" />
			</div>
			<div className={styles.titleDescription}>
				<Typography
					variant={
						isMobile
							? TypographyVariants.HEADING_S
							: TypographyVariants.HEADING_M
					}
					className={styles.title}
				>
					{capitalizeFirstLetterOfEachWord(article.title)}
				</Typography>
				<Typography
					className={styles.date}
					variant={TypographyVariants.DESCRIPTION}
				>
					{formatShortDate(article.datePosted)}
				</Typography>
			</div>
		</Link>
	);
};

export default ArticleCard;
