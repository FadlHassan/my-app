import React from 'react';
import styles from 'components/contact-section/contactSection.module.css';
import IconList from 'components/icon-list/IconList';

const ContactSection = () => {
	return (
		<div className={styles.contactAndIcons}>
			<a
				className={styles.contact}
				href="mailto:fadlpraveeshhassan@gmail.com"
			>
				Contact
			</a>
			<IconList />
		</div>
	);
};

export default ContactSection;
