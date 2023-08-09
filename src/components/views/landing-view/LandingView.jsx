import React from "react";
import TypographyVariants from "../../../data/typography_variants";
import Typography from "../../typography/Typography";
import styles from './landingView.module.css';
import myImage from '../../../images/landing-page-girl.png';
import View from "../view/View";
import { useMediaQuery } from 'react-responsive';

const LandingView = () => {
    const isDesktopOrLarger = useMediaQuery({ maxWidth: 1024 });
    const landingViewStyle = {
        paddingBottom: '0'
    };
    
    return (
        isDesktopOrLarger ?
            <View className={styles.landingViewMobileContent}>
                <div className={styles.titleSection}>
                            <Typography className={styles.title} id="landingPageTitle" variant={TypographyVariants.HEADING_XL} color={styles.titleColor}>
                                Welcome,<br/>my name is <br/> Fadl Hassan
                            </Typography>
                </div>
            </View> :
            <View className={styles.landingViewContent} viewStyle={landingViewStyle}>
                <Typography className={styles.title} id="landingPageTitle" variant={TypographyVariants.HEADING_XL} color={styles.titleColor}>
                    Welcome, my name is <br/> Fadl Hassan <br/>
                </Typography>
                <img src={myImage} alt="Landing page"/>
            </View>  
    );
};

export default LandingView;