import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from 'components/scroll/scroll.module.css';

export const Scroll = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return <div className={styles.scroll}>{children}</div>;
};
