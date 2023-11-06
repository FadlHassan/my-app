import React from 'react';
import styles from 'components/article-card/articleCard.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import myImage from 'images/landing-page-girl.jpg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
const ArticleCard = ({ title, subtitle }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <Link to="/article" className={styles.articleCard}>
            <div className={styles.imageContainer}>
                <img src={myImage} alt="ArticleCardImage"/>
            </div>
            <div className={styles.titleDescription}>
                <Typography variant={isMobile ? TypographyVariants.HEADING_M : TypographyVariants.HEADING_L} color={styles.titleColor}>
                    {title}
                </Typography>
                <Typography variant={isMobile ? TypographyVariants.HEADING_XS : TypographyVariants.HEADING_S} color={styles.subtitleColor}>
                    {subtitle}
                </Typography>
            </div>
        </Link>
    );
};

export default ArticleCard;