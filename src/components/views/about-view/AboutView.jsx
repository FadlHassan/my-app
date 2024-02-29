import React from 'react';
import styles from 'components/views/about-view/aboutView.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import View from 'components/views/view/View';
import backgroundSectionImage from 'images/background.jpg';
import readSectionImage from 'images/read.jpg';
import fitnessSectionImage from 'images/fitness.jpg';
import philosophySectionImage from 'images/philosophy.jpg';
import usePageTitle from 'hooks/title';

const AboutView = () => {
	usePageTitle('About');
	const backgroundSection = (
		<div className={styles.section}>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.sectionHeading}
				>
					Background
				</Typography>
				<div className={styles.imageContainer}>
					<img
						src={backgroundSectionImage}
						alt="BackgroundImage"
						loading="lazy"
					/>
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
				>
					I’m a <b>23 year old Junior Software Engineer</b> at
					American Express, working primarily on the front-end, and
					based in Brighton, UK.<br></br>
					<br></br>
					I’m originally from the state of Kerala in India. I spent my
					life growing up in Dubai, UAE, up until I finished my high
					school education. After that, I decided to move to the UK to
					do my Bachelors in Computer Science at the University of
					Edinburgh. And, that’s how I ended up to where I am now.
				</Typography>
			</div>
			<div className={styles.desktopImageContainer}>
				<img
					src={backgroundSectionImage}
					alt="BackgroundImage"
					loading="lazy"
				/>
			</div>
		</div>
	);

	const readSection = (
		<div className={styles.section}>
			<div className={styles.desktopImageContainer}>
				<img src={readSectionImage} alt="ReadImage" loading="lazy" />
			</div>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.sectionHeading}
				>
					Reading, Listening and Writing
				</Typography>
				<div className={styles.imageContainer}>
					<img
						src={readSectionImage}
						alt="ReadImage"
						loading="lazy"
					/>
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
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
					className={styles.sectionHeading}
				>
					Fitness
				</Typography>
				<div className={styles.imageContainer}>
					<img
						src={fitnessSectionImage}
						alt="FitnessImage"
						loading="lazy"
					/>
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
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
					className={styles.sectionContent}
				>
					One day, my mind just switched and I decided I’m going to
					try and be better. From then on, I’ve been on this mission
					to keep <b>taking my fitness to the next level</b>. Although
					there were years where I made minimal progress, the last
					year has been spectacular with immense muscular growth and
					fat loss. For my 15 years old self, I’m remain committed to
					this journey and will continue to keep going.
				</Typography>
			</div>
			<div className={styles.desktopImageContainer}>
				<img
					src={fitnessSectionImage}
					alt="FitnessImage"
					loading="lazy"
				/>
			</div>
		</div>
	);

	const philosophySection = (
		<div className={styles.section}>
			<div className={styles.desktopImageContainer}>
				<img
					src={philosophySectionImage}
					alt="PhilosophyImage"
					loading="lazy"
				/>
			</div>
			<div className={styles.textContainer}>
				<Typography
					variant={TypographyVariants.HEADING_L}
					className={styles.sectionHeading}
				>
					Philosophy
				</Typography>
				<div className={styles.imageContainer}>
					<img
						src={philosophySectionImage}
						alt="PhilosophyImage"
						loading="lazy"
					/>
				</div>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
				>
					<em>“No amount of money ever bought a second of time”</em> -
					Tony Stark
				</Typography>

				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
				>
					<em>
						“Why do we fall sir? So we can learn to pick ourselves
						up.”
					</em>{' '}
					- Alfred J. Pennyworth
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
				>
					<em>
						“Yesterday is history, tomorrow is a mystery, but today
						is a gift. That is why it is called the present.”
					</em>{' '}
					- Master Oogway
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
				>
					<em>
						“Hard work is worthless for those that don't believe in
						themselves.”
					</em>{' '}
					- Naruto Uzumaki
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
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
					className={styles.sectionHeading}
				>
					Conclusion
				</Typography>
				<Typography
					variant={TypographyVariants.DESCRIPTION}
					className={styles.sectionContent}
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
