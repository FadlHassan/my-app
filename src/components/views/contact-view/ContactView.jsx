import React from "react";
import styles from './contactView.module.css';
import Typography from "../../typography/Typography";
import TypographyVariants from "../../../data/typography_variants";
import GithubIcon from "../../../icons/GithubIcon";
import LinkedInIcon from "../../../icons/LinkedInIcon";
import InstagramIcon from "../../../icons/InstagramIcon";
import View from "../view/View";
import { useMediaQuery } from 'react-responsive';

const ContactView = () => {
    const isDesktopOrLarger = useMediaQuery({ minWidth: 1024 });

    const emailContent = 
        <div className={styles.emailContent}>
            <Typography variant={TypographyVariants.HEADING_L} className={styles.emailHeader}>
                Email
            </Typography>
            <Typography variant={TypographyVariants.HEADING_M} className={styles.emailDesc}>
                fadlpraveeshhassan@gmail.com
            </Typography>
        </div>

    const linkContent =
        <div className={styles.linkContent}>
            <Typography variant={TypographyVariants.HEADING_L} className={styles.emailHeader}>
                Contact me on
            </Typography>
            <div className={styles.iconList}>
                <LinkedInIcon />
                <InstagramIcon />
                <GithubIcon />
            </div>
        </div>

    const newsLetterContent =
        <div className={styles.newsLetterContent}>
            <Typography variant={TypographyVariants.HEADING_M} className={styles.newsletterDesc}>
                Enter email to receive newsletter:
            </Typography>
            <input className={styles.input}/>
        </div>

    return (
        <View>
             {
            isDesktopOrLarger ?
            <div className={styles.content}>
                <div>
                    {emailContent}
                    {linkContent}
                </div>
                {newsLetterContent}
            </div> : 
            <div className={styles.tabletContent}>
                {newsLetterContent}
                <div>
                    {emailContent}
                    {linkContent}
                </div>
            </div>
        }
        </View>
    );
}

export default ContactView;