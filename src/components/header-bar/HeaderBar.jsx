import React, { useEffect, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styles from 'components/header-bar/headerBar.module.css';
import NavLink from 'components/nav-link/NavLink';
import ContactSection from 'components/contact-section/ContactSection';

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
			<div className={styles.topRow}>
				<ul className={styles.navigation}>
					<li>
						<NavLink title="Home" link="/" />
					</li>
					<li>
						<NavLink title="Blog" link="/blog" />
					</li>
					<li>
						<NavLink title="About" link="/about" />
					</li>
				</ul>
				<ContactSection />
			</div>
			<div className={styles.divider} />
		</div>
	);

	const linksSm = (
		<div
			className={`${styles.overlay} ${isOverlayOpen ? styles.open : ''}`}
		>
			<div className={styles.headerContainer}>
				<ul>
					<li>
						<NavLink
							title="Home"
							onClick={() => handleNavigate('home')}
						/>
					</li>
					<li>
						<NavLink
							title="Blog"
							onClick={() => handleNavigate('blog')}
						/>
					</li>
					<li>
						<NavLink
							title="About"
							onClick={() => handleNavigate('about')}
						/>
					</li>
				</ul>
				<ContactSection />
			</div>
		</div>
	);

	return isTabletOrLargerDevice ? (
		linksLg
	) : (
		<>
			<div className={styles.hamburger}>
				<Hamburger
					className={styles.hamburger}
					toggled={isOverlayOpen}
					toggle={handleToggleOverlay}
				/>
			</div>
			{linksSm}
		</>
	);
}

export default HeaderBar;
