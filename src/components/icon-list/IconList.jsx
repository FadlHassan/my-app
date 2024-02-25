import React from 'react';
import styles from 'components/icon-list/iconList.module.css';
import LinkedInIcon from 'icons/LinkedInIcon';
import InstagramIcon from 'icons/InstagramIcon';
import GithubIcon from 'icons/GithubIcon';

const IconList = ({ className }) => {
	return (
		<div className={`${styles.iconList} ${className}`}>
			<LinkedInIcon />
			<InstagramIcon />
			<GithubIcon />
		</div>
	);
};

export default IconList;
