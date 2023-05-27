import React from "react";
import TypographyVariants from "../../../data/typography_variants";
import Typography from "../../typography/Typography";
import HeaderBar from "../../header-bar/HeaderBar";
import styles from './landingView.module.css';
import myImage from '../../../images/landing-page-girl.png';

const LandingView = () => {
    const title = 'Welcome, my name is Fadl Hassan';

    return (
        <div className={styles.landingView}>
            <HeaderBar/>
            <div className={styles.frame}>
                <div className={styles.titleSection}>
                    <Typography id="landingPageTitle" variant={TypographyVariants.HEADING_XL} color={styles.titleColor}>{title}</Typography>
                </div>
                <img class={styles.imageStyle} src={myImage} alt="Landing page"/>
            </div>
        </div>
        
    );
};

export default LandingView;