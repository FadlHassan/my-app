import React from 'react';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/views/landing-view/landingView.module.css';
import View from 'components/views/view/View';
import usePageTitle from 'hooks/title';
import profileImage from 'images/AboutViewImage1.jpg';
import { useNavigate } from 'react-router-dom';

const LandingView = ({ style }) => {
	usePageTitle('Home');
	const navigate = useNavigate();
	const titleWords = 'Welcome, my name is Fadl Hassan.'.split(' ');
	titleWords.forEach((word, index) => {
		titleWords[index] = word + ' ';
	});
	const titleWithAnimation = titleWords.map((word, index) => {
		return (
			<span
				style={{
					animationDelay: `${index * 0.3}s`,
				}}
				className={styles.titleWord}
			>
				{index > 3 ? <b>{`${word}`}</b> : `${word}`}
			</span>
		);
	});
	const subtitle =
		'I live life to fullest, and am committed to making a positive and lasting impact on the world.';

	return (
		<View className={styles.landingView}>
			<div className={styles.content}>
				<div className={styles.infoContainer}>
					<Typography
						className={styles.title}
						id="landingPageTitle"
						variant={TypographyVariants.HEADING_XL}
						color={styles.titleColor}
					>
						{titleWithAnimation}
					</Typography>
					<Typography
						className={styles.subtitle}
						variant={TypographyVariants.HEADING_L}
					>
						{subtitle}
					</Typography>
					<div className={styles.extraInfo}>
						<Typography
							className={styles.learnMore}
							variant={TypographyVariants.HEADING_M}
						>
							<a onClick={() => navigate('/about')}>Learn More</a>
						</Typography>
						<Typography
							className={styles.contact}
							variant={TypographyVariants.HEADING_M}
						>
							<a href="mailto:fadlpraveeshhassan@gmail.com">
								Contact
							</a>
						</Typography>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<img
						className={styles.profileImage}
						src={profileImage}
						alt="BackgroundImage"
						loading="lazy"
					/>
				</div>
			</div>
		</View>
	);
};

export default LandingView;
