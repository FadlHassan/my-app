import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Typography from 'components/typography/Typography';
import TypographyVariants from 'data/typography_variants';
import styles from 'components/header-bar/headerBar.module.css';

function HeaderBar() {
  const isTabletOrLargerDevice = useMediaQuery({ minWidth: 768 });
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();

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
  }
  
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
            <a className={styles.navLink}
                    onClick={() => handleNavigate('home')}>
              <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Home</Typography>
            </a>
          </li>
          <li>
            <a className={styles.navLink}
                    onClick={() => handleNavigate('blog')}>
              <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Blog</Typography>
            </a>
          </li>
          <li>
            <a className={styles.navLink}
                    onClick={() => handleNavigate('contact')}>
              <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>Contact</Typography>
            </a>
          </li>
          <li>
          <a className={styles.navLink}
                  onClick={() => handleNavigate('about')}>
            <Typography variant={TypographyVariants.HEADING_L} color={styles.color}>About</Typography>
          </a>
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