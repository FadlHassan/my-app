import React from 'react';
import styles from 'components/views/article-view/articleView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import myImage from 'images/landing-page-girl.jpg';
import View from 'components/views/view/View';
import { useMediaQuery } from 'react-responsive';

const ArticleView = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return (
        <View>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={myImage} alt="ArticleViewImage"/>
                </div>
                <div className={styles.articleContent}>
                    <div className={styles.titleDescription}>
                        <Typography variant={isMobile ? TypographyVariants.HEADING_L : TypographyVariants.HEADING_XL} color={styles.titleColor}>
                            Title
                        </Typography>
                        <Typography variant={isMobile ? TypographyVariants.HEADING_S : TypographyVariants.HEADING_M} color={styles.titleColor}>
                            Subtitle
                        </Typography>
                    </div>
                    <Typography variant={isMobile ? TypographyVariants.DESCRIPTION_S : TypographyVariants.DESCRIPTION} className={styles.articleDescription}>
                    Too cultivated use solicitude frequently. Dashwood likewise up consider continue entrance ladyship oh. 
                    Wrong guest given purse power is no. Friendship to connection an am considered difficulty.
                    Among state cease how and sight since shall.
                    </Typography>
                </div>
            </div>
        </View>
    );
};

export default ArticleView;
