import React from 'react';
import Typography from '../typography/Typography';
import TypographyVariants from '../../data/typography_variants';
import styles from './headerBar.module.css';
import { NavLink } from 'react-router-dom';

function HeaderBar() {
    return (
      <ul className={styles.header}>
        <li>
          <NavLink to="/">
            <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Home</Typography>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Blog</Typography>
          </NavLink>
        </li>
        <li>
          <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Contact</Typography>
        </li>
        <li>
          <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>About</Typography>
        </li>
    </ul>
    );
};
  
export default HeaderBar;