import React from 'react';
import styles from 'components/contact-section/contactSection.module.css';
import LinkedInIcon from 'icons/LinkedInIcon';
import InstagramIcon from 'icons/InstagramIcon';
import GithubIcon from 'icons/GithubIcon';

const ContactSection = () => {
	return (
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
	);
};

export default ContactSection;
