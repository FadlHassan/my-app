import React from "react";
import styles from './articleView.module.css';
import Typography from "../../typography/Typography";
import TypographyVariants from "../../../data/typography_variants";
import myImage from '../../../images/landing-page-girl.png';
import { useMediaQuery } from "react-responsive";

const ArticleView = () => {
    return (
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <img src={myImage} alt="ArticleViewImage"/>
            </div>
            <div className={styles.articleContent}>
                <div className={styles.titleDescription}>
                    <Typography variant={TypographyVariants.HEADING_XL} color={styles.titleColor}>
                        Title
                    </Typography>
                    <Typography variant={TypographyVariants.HEADING_M} color={styles.titleColor}>
                        Subtitle
                    </Typography>
                </div>
                <Typography variant={TypographyVariants.DESCRIPTION} className={styles.articleDescription}>
                Too cultivated use solicitude frequently. Dashwood likewise up consider continue entrance ladyship oh. 
                Wrong guest given purse power is no. Friendship to connection an am considered difficulty.
                Among state cease how and sight since shall.
                </Typography>
            </div>
        </div>
    );
};

export default ArticleView;
