import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/nav-link/navLink.module.css';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import { useMediaQuery } from 'react-responsive';

const NavLink1 = ({ title, link, onClick }) => {
	const isTabletOrLargerDevice = useMediaQuery({ minWidth: 768 });
	console.log(title, onClick);

	return isTabletOrLargerDevice ? (
		<NavLink className={styles.navLink} to={link}>
			<Typography variant={TypographyVariants.HEADING_L}>
				{title}
			</Typography>
		</NavLink>
	) : (
		<a className={styles.navLink} onClick={onClick}>
			<Typography variant={TypographyVariants.HEADING_L}>
				{title}
			</Typography>
		</a>
	);
};

export default NavLink1;
