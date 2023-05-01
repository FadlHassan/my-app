import React from "react";
import styles from './articleCard.module.css';
import Typography from "../typography/Typography";
import TypographyVariants from "../../data/typography_variants";

const ArticleCard = ({ title, subtitle }) => {

    return (
        <div className={styles.articleCard}>
            <div className={styles.titleDescription}>
                <Typography variant={TypographyVariants.HEADING_L} color={styles.titleColor}>
                    {title}
                </Typography>
                <Typography variant={TypographyVariants.HEADING_S} color={styles.subtitleColor}>
                    {subtitle}
                </Typography>
            </div>
        </div>
    );
};

export default ArticleCard;