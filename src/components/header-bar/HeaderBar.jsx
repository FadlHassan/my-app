import React from 'react';
import Typography from '../typography/Typography';
import TypographyVariants from '../../data/typography_variants';
import styles from './headerBar.module.css';
import { NavLink } from 'react-router-dom';

function HeaderBar() {
    return (
      <ul className={styles.header}>
        <li>
          <NavLink className={styles.navLink}
                   to="/">
            <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Home</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink}
                   to="/blog">
            <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Blog</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink}
                   to="/contact">
            <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Contact</Typography>
          </NavLink>
        </li>
        <li>
        <NavLink className={styles.navLink}
                 to="/about">
          <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>About</Typography>
        </NavLink>
        </li>
    </ul>
    );
};
  
export default HeaderBar;