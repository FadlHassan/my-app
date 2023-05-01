import React from "react";
import styles from './articleCard.module.css';
import Typography from "../typography/Typography";
import TypographyVariants from "../../data/typography_variants";

const ArticleCard = ({ title, subtitle, image}) => {
    const imageUrl = image.default;
    
    return (
        <div className={styles.articleCard}>
            <img src={imageUrl}/>
            <div className={styles.titleDescription}>
                <Typography variant={TypographyVariants.HEADING_L}>
                    {title}
                </Typography>
                <Typography variant={TypographyVariants.HEADING_S}>
                    {subtitle}
                </Typography>
            </div>
        </div>
    );
};

export default ArticleCard;