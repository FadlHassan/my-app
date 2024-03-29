import React from "react";
import styles from 'components/typography/typography.module.css';
import TypographyVariants from "data/typography_variants";

function getComponent(variant) {
  switch (variant) {
    case TypographyVariants.HEADING_XL:
    case TypographyVariants.HEADING_L:
    case TypographyVariants.HEADING_M:
    case TypographyVariants.HEADING_S:
      return variant;
    case TypographyVariants.DESCRIPTION:
      return 'p';
    default:
      return 'span';
  }
}

const Typography = ({ className, variant, color, bold = false, children }) => {
  const Component = getComponent(variant);
  return (
    <Component className={`${className} ${styles[variant]} ${color} ${bold && styles.bold}`}>
        {children}
    </Component>
  );
};

export default Typography;