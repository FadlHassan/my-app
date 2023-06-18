import React from "react";
import styles from './aboutView.module.css';
import HeaderBar from "../../header-bar/HeaderBar";
import Typography from "../../typography/Typography";
import TypographyVariants from "../../../data/typography_variants";
import Slideshow from "../../slideshow/Slideshow";

const AboutView = () => {

    return (
        <div className={styles.aboutView}>
            <HeaderBar />
            <div className={styles.aboutInfo}>
                <Typography variant={TypographyVariants.CONTENT} className={styles.content}>
                    Welcome to my website, my name is Fadl Praveesh Hassan.
                    <br></br><br></br>
                    I’m from India and I’m currently 22 years old. I was raised in Dubai till I was 18 and then moved to the UK to do my Bachelors in Computer Science at the University of Edinburgh. 
                    I’m now located in Brighton, working as a Software Engineer at America Express.
                    <br></br><br></br>
                    Apart from being an engineer, I enjoy writing blogs, singing, watching anime, and much more.
                </Typography>
                <Slideshow />
            </div>
        </div>
    );
};

export default AboutView;