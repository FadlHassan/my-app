import React from "react";
import TypographyVariants from "../../../data/typography_variants";
import Typography from "../../typography/Typography";
import styles from './landingView.module.css';
import myImage from '../../../images/landing-page-girl.png';
import View from "../view/View";
import { useMediaQuery } from 'react-responsive';

const LandingView = () => {
    const isDesktopOrLarger = useMediaQuery({ minWidth: 1024 });
    const landingViewStyle = {
        paddingBottom: '0',
        overflow: 'hidden'
    };

    const landingViewMobileStyle = {
        height: '100%'
    };
    
    
    return (
        isDesktopOrLarger ?
        <View className={styles.landingViewContent} viewStyle={landingViewStyle}>
                <Typography className={styles.title} id="landingPageTitle" variant={TypographyVariants.HEADING_L} color={styles.titleColor}>
                    Welcome, my name is <br/> Fadl Hassan <br/>
                </Typography>
                <img src={myImage} alt="Landing page"/>
            </View>  :
            <View className={styles.landingViewMobileContent} viewStyle={landingViewMobileStyle}>
                <Typography className={styles.title} id="landingPageTitle" variant={TypographyVariants.HEADING_L} color={styles.titleColor}>
                 {'Welcome, my name is\nFadl Hassan'}
                </Typography>
            </View>
    
    );
};

export default LandingView;