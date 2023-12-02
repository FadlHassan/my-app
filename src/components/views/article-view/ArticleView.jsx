import React, { useState, useEffect } from 'react';
import styles from 'components/views/article-view/articleView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import myImage from 'images/landing-page-girl.jpg';
import View from 'components/views/view/View';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { getArticle, loadImage } from 'services/article.service';

const ArticleView = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 480 });

    useEffect(() => {
        async function fetchMyData() {
            const result = await getArticle(id);
            setArticle(result);
            const image = await loadImage(id);
            setImage(image);
            setLoading(false);
        }
        fetchMyData();
      }, []);
    
    if (loading) return <div>Loading...</div>;

    return (
        <View>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={image ? image : myImage} alt="ArticleImage"/>
                </div>
                <div className={styles.articleContent}>
                    <div className={styles.titleDescription}>
                        <Typography variant={isMobile ? TypographyVariants.HEADING_L : TypographyVariants.HEADING_XL} color={styles.titleColor}>
                            {article.title}
                        </Typography>
                        <Typography variant={isMobile ? TypographyVariants.HEADING_S : TypographyVariants.HEADING_M} color={styles.titleColor}>
                            {article.subtitle}
                        </Typography>
                    </div>
                    <Typography variant={isMobile ? TypographyVariants.DESCRIPTION_S : TypographyVariants.DESCRIPTION} className={styles.articleDescription}>
                    {article.content}
                    </Typography>
                </div>
            </div>
        </View>
    );
};

export default ArticleView;
