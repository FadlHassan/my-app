import React from "react";
import styles from './typography.module.css';
import TypographyVariants from "../../data/typography_variants";

function getComponent(variant) {
  switch (variant) {
    case TypographyVariants.HEADING_XL:
    case TypographyVariants.HEADING_L:
    case TypographyVariants.HEADING_M:
    case TypographyVariants.HEADING_S:
      return variant;
    default:
      return 'p';
  }
}

const Typography = ({ className, variant, color, children }) => {
  const Component = getComponent(variant);
  return (
    <Component className={`${className} ${styles[variant]} ${color}`}>
        {children}
    </Component>
  );
};

export default Typography;