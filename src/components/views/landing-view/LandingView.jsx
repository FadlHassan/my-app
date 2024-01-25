import React from 'react';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/views/landing-view/landingView.module.css';
import landingPageImage from 'images/landing-page-avatar.png';
import { useMediaQuery } from 'react-responsive';
import View from 'components/views/view/View';

const LandingView = ({ style }) => {
	const maxScreenWidthForImage = useMediaQuery({ minWidth: 1178 });

	return (
		<View className={styles.landingView}>
			<div className={styles.content} style={style}>
				<Typography
					className={styles.title}
					id="landingPageTitle"
					variant={TypographyVariants.HEADING_XL}
					color={styles.titleColor}
				>
					Welcome, my name is <br /> Fadl Hassan <br />
				</Typography>
				{maxScreenWidthForImage && (
					<div className={styles.imagePopup}>
						<img
							src={landingPageImage}
							alt="Landing page"
							className={styles.img}
						/>
					</div>
				)}
			</div>
		</View>
	);
};

export default LandingView;
