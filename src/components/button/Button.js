import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type,
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = isLoading ? (
    <div className="w-10 h-10 rounded-full  border-4 border-whilte border-b-transparent border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={`p-4 text-base font-semibold rounded-xl min-h-[56px] flex text-white justify-center items-center ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
