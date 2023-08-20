import React from "react";
import TypographyVariants from "../../../data/typography_variants";
import Typography from "../../typography/Typography";
import styles from './landingView.module.css';
import myImage from '../../../images/landing-page-girl.png';
import { useMediaQuery } from 'react-responsive';

const LandingView = ({style}) => {
    const isDesktopOrLarger = useMediaQuery({ minWidth: 1024 });

    const landingViewMobileStyle = {
        height: '100%'
    };
    
    
    return (
        isDesktopOrLarger ?
            <div className={styles.content} style={style}>
                <Typography className={styles.title} id="landingPageTitle" variant={TypographyVariants.HEADING_L} color={styles.titleColor}>
                    Welcome, my name is <br/> Fadl Hassan <br/>
                </Typography>
                <img src={myImage} alt="Landing page"/>
            </div>  :
            <div className={styles.mobileContent} style={landingViewMobileStyle}>
                <Typography className={styles.title} id="landingPageTitle" variant={TypographyVariants.HEADING_L} color={styles.titleColor}>
                 {'Welcome, my name is\nFadl Hassan'}
                </Typography>
            </div>
    
    );
};

export default LandingView;