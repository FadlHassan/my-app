import React from "react";
import styles from './contactView.module.css';
import HeaderBar from "../../header-bar/HeaderBar";
import Typography from "../../typography/Typography";
import TypographyVariants from "../../../data/typography_variants";
import GithubIcon from "../../../icons/GithubIcon";
import LinkedInIcon from "../../../icons/LinkedInIcon";
import InstagramIcon from "../../../icons/InstagramIcon";

const ContactView = () => {
    return (
        <div className={styles.contactView}>
            <HeaderBar/>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.emailContent}>
                        <Typography variant={TypographyVariants.CONTACT_HEADER} className={styles.emailHeader}>
                            Email
                        </Typography>
                        <Typography variant={TypographyVariants.EMAIL} className={styles.emailDesc}>
                            fadlpraveeshhassan@gmail.com
                        </Typography>
                    </div>
                    <div className={styles.linkContent}>
                        <Typography variant={TypographyVariants.CONTACT_HEADER} className={styles.emailHeader}>
                            You can also contact me on:
                        </Typography>
                        <div className={styles.iconList}>
                            <LinkedInIcon />
                            <InstagramIcon />
                            <GithubIcon />
                        </div>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.newsletter}>
                        <div className={styles.newsletterContent}>
                            <Typography variant={TypographyVariants.HEADING_L} className={styles.newsletterDesc}>
                                Enter email to receive newsletter:
                            </Typography>
                            <input className={styles.input}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactView;