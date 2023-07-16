import React, { useState } from 'react';
import Typography from '../typography/Typography';
import TypographyVariants from '../../data/typography_variants';
import styles from './headerBar.module.css';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';

function HeaderBar() {
  const isTabletOrLargerDevice = useMediaQuery({ minWidth: 768 });
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleToggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  
  const linksLg = 
      <ul className = {styles.header}>
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

    const linksSm = 
    <div className={`${styles.overlay} ${isOverlayOpen ? styles.open : ''}`}>        
      <ul>
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
      </div>
      
    return (
      isTabletOrLargerDevice ?
        <>
        {linksLg}
        </> :
        <>
          <div className={styles.hamburger}>
            <Hamburger toggled={isOverlayOpen} toggle={handleToggleOverlay}/>
          </div>
          {linksSm}
        </>
    );
};
  
export default HeaderBar;