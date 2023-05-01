import React from "react";
import styles from './typography.module.css';

const Typography = ({ className, variant, color, children }) => {
  const Component = variant ? variant : "span";
  return (
    <Component className={`${className} ${styles[variant]} ${color}`}>
        {children}
    </Component>
  );
};

export default Typography;