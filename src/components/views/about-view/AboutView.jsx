import React from 'react';
import styles from 'components/views/about-view/aboutView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import View from 'components/views/view/View';
import backgroundSectionImage from 'images/AboutViewImage1.jpg';
import readSectionImage from 'images/AboutViewImage2.jpg';
import fitnessSectionImage from 'images/AboutViewImage3.jpg';
import philosophySectionImage from 'images/AboutViewImage4.jpg';

const AboutView = () => {
	const backgroundSection = (
		<div className={styles.section}>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.text}
				>
					Background
				</Typography>
				<div className={styles.imageContainer}>
					<img src={backgroundSectionImage} alt="BackgroundImage" />
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					I’m a 23 year old Junior Software Engineer at American
					Express, working primarily on the front-end, and based in
					Brighton, UK.<br></br>
					<br></br>
					I’m originally from the state of Kerala in India. I spent my
					life growing up in Dubai, UAE, up until I finished my high
					school education. After that, I decided to move to the UK to
					do my Bachelors in Computer Science at the University of
					Edinburgh. And, that’s how I ended up to where I am now.
				</Typography>
			</div>
			<div className={styles.desktopImageContainer}>
				<img src={backgroundSectionImage} alt="BackgroundImage" />
			</div>
		</div>
	);

	const readSection = (
		<div className={styles.section}>
			<div className={styles.desktopImageContainer}>
				<img src={readSectionImage} alt="ReadImage" />
			</div>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.text}
				>
					Reading, Listening and Writing
				</Typography>
				<div className={styles.imageContainer}>
					<img src={readSectionImage} alt="ReadImage" />
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					I was never a really into writing. In fact, I used to hate
					everything about it and I didn’t think it was for me. But, I
					did have a passion for understanding the world better and
					was curious to know how everything works. The best way I
					could do this for myself was to <b>read</b>, <b>listen</b>{' '}
					and <b>write</b>. So, I finally started to not spend most of
					my time in bed binge-watching Netflix shows, and instead
					started to read all the books my Dad send me, listen to
					various podcasts and media content on Youtube, and write
					articles that explore the intricacies of how the world
					operates.
				</Typography>
			</div>
		</div>
	);

	const fitnessSection = (
		<div className={styles.section}>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.text}
				>
					Fitness
				</Typography>
				<div className={styles.imageContainer}>
					<img src={fitnessSectionImage} alt="FitnessImage" />
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					During my high school years, there was a time where I used
					to be a 15 year old kid, weighing a considerable 94k.
					Shopping for clothes was a constant reminder of my struggle,
					as I always used to grab the XL sizes. But, it made sense,
					considering I often used to order Burger King after coming
					back from school.
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					One day, my mind just switched and I decided I’m going to
					try and be better. From then on, I’ve been on this mission
					to keep taking my fitness to the next level. Although there
					were years where I made minimal progress, the last year has
					been spectacular with immense muscular growth and fat loss.
					For my 15 years old self, I’m remain committed to this
					journey and will continue to keep going.
				</Typography>
			</div>
			<div className={styles.desktopImageContainer}>
				<img src={fitnessSectionImage} alt="FitnessImage" />
			</div>
		</div>
	);

	const philosophySection = (
		<div className={styles.section}>
			<div className={styles.desktopImageContainer}>
				<img src={philosophySectionImage} alt="PhilosophyImage" />
			</div>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.text}
				>
					Philosophy
				</Typography>
				<div className={styles.imageContainer}>
					<img src={philosophySectionImage} alt="PhilosophyImage" />
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					<em>“No amount of money ever bought a second of time”</em> -
					Tony Stark
				</Typography>

				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					<em>
						“Why do we fall sir? So we can learn to pick ourselves
						up.”
					</em>{' '}
					- Alfred J. Pennyworth
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					<em>
						“Yesterday is history, tomorrow is a mystery, but today
						is a gift. That is why it is called the present.”
					</em>{' '}
					- Master Oogway
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					<em>
						“Hard work is worthless for those that don't believe in
						themselves.”
					</em>{' '}
					- Naruto Uzumaki
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					<em>
						"Happiness can be found, even in the darkest of times,
						if one only remembers to turn on the light."
					</em>{' '}
					- Albus Dumbledore
				</Typography>
			</div>
		</div>
	);

	const conclusionSection = (
		<div className={styles.section}>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.text}
				>
					Conclusion
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.text}
				>
					That’s a little bit about me. I’m a software engineer, who
					loves to read, listen and write, and also loves to keep fit.
					I’m always looking for new opportunities and challenges, and
					I’m always open to new ideas and perspectives.
				</Typography>
			</div>
		</div>
	);

	return (
		<View>
			<div className={styles.content}>
				{backgroundSection}
				<div className={styles.divider} />
				{readSection}
				<div className={styles.divider} />
				{fitnessSection}
				<div className={styles.divider} />
				{philosophySection}
				<div className={styles.divider} />
				{conclusionSection}
			</div>
		</View>
	);
};

export default AboutView;
