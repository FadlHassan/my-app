import React from 'react';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/views/landing-view/landingView.module.css';
import View from 'components/views/view/View';
import usePageTitle from 'hooks/title';
import profileImage from 'images/profile.jpg';
import { Link, useNavigate } from 'react-router-dom';

const LandingView = () => {
	usePageTitle('Home');
	return (
		<View className={styles.landingView}>
			<div className={styles.content}>
				<div className={styles.infoContainer}>
					<div className={styles.title}>
						<Typography variant={TypographyVariants.HEADING_XL}>
							Welcome, my name is <b>Fadl Hassan</b>
						</Typography>
					</div>
					<div className={styles.subtitle}>
						<Typography variant={TypographyVariants.HEADING_M}>
							I live life to fullest, and am committed to making a
							positive and lasting impact on the world.{' '}
						</Typography>
					</div>
					<div className={styles.extraInfo}>
						<Typography
							className={styles.learnMore}
							variant={TypographyVariants.HEADING_M}
						>
							<Link to="/about">Learn More</Link>
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
