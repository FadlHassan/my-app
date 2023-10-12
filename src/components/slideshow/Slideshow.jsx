import React, { useEffect } from 'react';
import styles from './slideShow.module.css';
import image1 from '../../images/AboutViewImage1.jpg'
import image2 from '../../images/AboutViewImage2.jpg';
import image3 from '../../images/AboutViewImage3.jpg';

const Slideshow = () => {
  const images = [image1, image2, image3];
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [images.length, index]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img
            alt='slideshowImage'
            className={styles.slide}
            key={index}
            src={image}
          ></img>
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot}${index === idx ? ` ${styles.active}` : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;