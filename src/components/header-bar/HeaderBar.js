import React from 'react';
import Typography from '../typography/Typography';
import TypographyVariants from '../../data/typography_variants';
import styles from './headerBar.module.css';

function HeaderBar() {
    return (
      <div className={styles.header}>
        <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Home</Typography>
        <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Blog</Typography>
        <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Contact</Typography>
        <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>About</Typography>
      </div>
    );
};
  
export default HeaderBar;