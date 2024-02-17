import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/header-bar/headerBar.module.css';
import LinkedInIcon from 'icons/LinkedInIcon';
import InstagramIcon from 'icons/InstagramIcon';
import GithubIcon from 'icons/GithubIcon';

function HeaderBar() {
	const isTabletOrLargerDevice = useMediaQuery({ minWidth: 768 });
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsOverlayOpen(false);
	}, [isTabletOrLargerDevice]);

	const handleToggleOverlay = () => {
		setIsOverlayOpen(!isOverlayOpen);
	};

	const handleNavigate = (page) => {
		switch (page) {
			case 'blog':
				navigate('/blog');
				break;
			case 'contact':
				navigate('/contact');
				break;
			case 'about':
				navigate('/about');
				break;
			default:
				navigate('/');
				break;
		}
		handleToggleOverlay();
	};

	const linksLg = (
		<div className={styles.headerContainer}>
			<ul className={styles.headerBar}>
				<li>
					<NavLink className={styles.navLink} to="/">
						<Typography variant={TypographyVariants.HEADING_L}>
							Home
						</Typography>
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.navLink} to="/blog">
						<Typography variant={TypographyVariants.HEADING_L}>
							Blog
						</Typography>
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.navLink} to="/about">
						<Typography variant={TypographyVariants.HEADING_L}>
							About
						</Typography>
					</NavLink>
				</li>
			</ul>
			<div className={styles.contactAndIcons}>
				<a
					className={styles.contact}
					href="mailto:fadlpraveeshhassan@gmail.com"
				>
					Contact
				</a>
				<div className={styles.iconList}>
					<LinkedInIcon />
					<InstagramIcon />
					<GithubIcon />
				</div>
			</div>
		</div>
	);

	const linksSm = (
		<div
			className={`${styles.overlay} ${isOverlayOpen ? styles.open : ''}`}
		>
			<div className={styles.headerContainer}>
				<ul>
					<li>
						<a
							className={styles.navLink}
							onClick={() => handleNavigate('home')}
						>
							<Typography variant={TypographyVariants.HEADING_L}>
								Home
							</Typography>
						</a>
					</li>
					<li>
						<a
							className={styles.navLink}
							onClick={() => handleNavigate('blog')}
						>
							<Typography variant={TypographyVariants.HEADING_L}>
								Blog
							</Typography>
						</a>
					</li>
					<li>
						<a
							className={styles.navLink}
							onClick={() => handleNavigate('about')}
						>
							<Typography variant={TypographyVariants.HEADING_L}>
								About
							</Typography>
						</a>
					</li>
				</ul>
				<div className={styles.contactAndIcons}>
					<a
						className={styles.contact}
						href="mailto:fadlpraveeshhassan@gmail.com"
					>
						Contact
					</a>
					<div className={styles.iconList}>
						<LinkedInIcon />
						<InstagramIcon />
						<GithubIcon />
					</div>
				</div>
			</div>
		</div>
	);

	return isTabletOrLargerDevice ? (
		<>{linksLg}</>
	) : (
		<>
			<div className={styles.hamburger}>
				<Hamburger
					toggled={isOverlayOpen}
					toggle={handleToggleOverlay}
				/>
			</div>
			{linksSm}
		</>
	);
}

export default HeaderBar;
