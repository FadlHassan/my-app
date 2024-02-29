import React, { useState, useEffect, useRef } from 'react';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/views/landing-view/landingView.module.css';
import View from 'components/views/view/View';
import usePageTitle from 'hooks/title';
import profileImage from 'images/AboutViewImage1.jpg';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const LandingView = () => {
	usePageTitle('Home');
	const navigate = useNavigate();
	const isTabletOrLargerDevice = useMediaQuery({ minWidth: 768 });

	return (
		<View className={styles.landingView}>
			<div className={styles.content}>
				<div className={styles.infoContainer}>
					<div className={styles.title}>
						<Typography
							variant={
								isTabletOrLargerDevice
									? TypographyVariants.HEADING_XL
									: TypographyVariants.HEADING_L
							}
						>
							Welcome, my name is <b>Fadl Hassan</b>
						</Typography>
					</div>
					<div className={styles.subtitle}>
						<Typography
							variant={
								isTabletOrLargerDevice
									? TypographyVariants.HEADING_M
									: TypographyVariants.HEADING_S
							}
						>
							I live life to fullest, and am committed to making a
							positive and lasting impact on the world.{' '}
						</Typography>
					</div>
					<div className={styles.extraInfo}>
						<Typography
							className={styles.learnMore}
							variant={
								isTabletOrLargerDevice
									? TypographyVariants.HEADING_M
									: TypographyVariants.HEADING_S
							}
						>
							<a onClick={() => navigate('/about')}>Learn More</a>
						</Typography>
						<Typography
							className={styles.contact}
							variant={
								isTabletOrLargerDevice
									? TypographyVariants.HEADING_M
									: TypographyVariants.HEADING_S
							}
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
