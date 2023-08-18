import React from "react";
import styles from './aboutView.module.css';
import Typography from "../../typography/Typography";
import TypographyVariants from "../../../data/typography_variants";
import Slideshow from "../../slideshow/Slideshow";
import View from "../view/View";
import { useMediaQuery } from 'react-responsive';

const AboutView = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });
    const isSmallScreen = useMediaQuery({ minWidth: 320, maxWidth: 568});

    return (
        <View className={styles.content}>
            <Typography variant={isSmallScreen ? TypographyVariants.DESCRIPTION : TypographyVariants.CONTENT} className={styles.text}>
                Welcome to my website, my name is Fadl Praveesh Hassan.
                <br></br><br></br>
                I’m from India and I’m currently 22 years old. I was raised in Dubai till I was 18 and then moved to the UK to do my Bachelors in Computer Science at the University of Edinburgh. 
                I’m now located in Brighton, working as a Software Engineer at America Express.
                <br></br><br></br>
                Apart from being an engineer, I enjoy writing blogs, singing, watching anime, and much more.
            </Typography>
            { isLargeScreen && <Slideshow /> }
        </View>
    );
};

export default AboutView;