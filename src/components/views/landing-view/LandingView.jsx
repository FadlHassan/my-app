import React from 'react';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/views/landing-view/landingView.module.css';
import landingPageImage from 'images/landing-page-avatar.png';
import { useMediaQuery } from 'react-responsive';
import View from 'components/views/view/View';

const LandingView = ({ style }) => {
	const isDesktopOrLarger = useMediaQuery({ minWidth: 1024 });

	return (
		<View className={styles.landingView}>
			{isDesktopOrLarger ? (
				<div className={styles.content} style={style}>
					<Typography
						className={styles.title}
						id="landingPageTitle"
						variant={TypographyVariants.HEADING_L}
						color={styles.titleColor}
					>
						Welcome, my name is <br /> Fadl Hassan <br />
					</Typography>
					<div className={styles.imagePopup}>
						<img
							src={landingPageImage}
							alt="Landing page"
							className={styles.img}
						/>
					</div>
				</div>
			) : (
				<div className={styles.mobileContent}>
					<Typography
						className={styles.title}
						id="landingPageTitle"
						variant={TypographyVariants.HEADING_L}
						color={styles.titleColor}
					>
						{'Welcome, my name is\nFadl Hassan'}
					</Typography>
				</div>
			)}
		</View>
	);
};

export default LandingView;
