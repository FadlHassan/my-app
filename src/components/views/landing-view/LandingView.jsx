import React from "react";
import Typed from "react-typed";
import TypographyVariants from "../../../data/typography_variants";
import Typography from "../../typography/Typography";
import HeaderBar from "../../header-bar/HeaderBar";
import styles from './landingView.module.css';
import myImage from '../../../images/landing-page-girl.png';

const LandingView = () => {
    const title = 'Welcome, my name is Fadl Hassan.';

    return (
        <div className={styles.landingView}>
            <HeaderBar/>
            <div className={styles.frame}>
                <div className={styles.titleSection}>
                    <Typography id="landingPageTitle" variant={TypographyVariants.HEADING_XL} color={styles.titleColor}>
                        <Typed  
                                showCursor
                                strings={[title]}
                                typeSpeed={100} 
                                fadeOut
                                onComplete={(self) => {
                                    self.cursor.style.visibility = 'hidden';
                                    self.cursor.style.opacity = '0';
                                    self.cursor.style.transition = 'visibility 0s 1s, opacity 1s linear';
                                }}/>
                    </Typography>
                </div>
                <img className={styles.imageStyle} src={myImage} alt="Landing ppage"/>
            </div>
        </div>
        
    );
};

export default LandingView;