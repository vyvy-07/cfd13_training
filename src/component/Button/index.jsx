import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Button = ({
  variant = "primary",
  link,
  className,
  children,
  disabled,
  ...rest
}) => {
  const variantClassNames = useMemo(() => {
    if (disabled) {
      return "btn btn--grey";
    }
    switch (variant) {
      case "primary":
        return "btn btn--primary";
      case "border":
        return "btn btn--border --black";
      default:
        return "";
    }
  }, [variant, disabled]);
  if (!link) {
    return (
      <button className={`${className ?? ""} ${variantClassNames}`} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <Link
      to={link}
      className={`${className ?? ""} ${variantClassNames}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
export default Button;
