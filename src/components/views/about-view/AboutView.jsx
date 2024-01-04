import React from 'react';
import styles from 'components/views/about-view/aboutView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import Slideshow from 'components/slideshow/Slideshow';
import View from 'components/views/view/View';
import { useMediaQuery } from 'react-responsive';

const AboutView = () => {
	const isLargeScreen = useMediaQuery({ minWidth: 1024 });
	const isSmallToMediumScreen = useMediaQuery({ maxWidth: 768 });

	return (
		<View>
			<div className={styles.content}>
				<Typography
					variant={
						isSmallToMediumScreen
							? TypographyVariants.DESCRIPTION
							: TypographyVariants.DESCRIPTION_H
					}
					className={styles.text}
				>
					Welcome to my website, my name is Fadl Praveesh Hassan.
					<br></br>
					<br></br>
					I’m from India and I’m currently 22 years old. I was raised
					in Dubai till I was 18 and then moved to the UK to do my
					Bachelors in Computer Science at the University of
					Edinburgh. I’m now located in Brighton, working as a
					Software Engineer at America Express.
					<br></br>
					<br></br>
					Apart from being an engineer, I enjoy writing blogs,
					singing, watching anime, and much more.
				</Typography>
				{isLargeScreen && <Slideshow />}
			</div>
		</View>
	);
};

export default AboutView;
