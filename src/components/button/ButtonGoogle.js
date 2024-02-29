import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className=" dark:text-white flex justify-center py-4 items-center gap-x-3 w-full border border-strock rounded-xl text-text2 font-semibold text-base mb-5 dark:border-darkStroke"
    >
      <img srcSet="/Google.png 2x" alt="google-icon" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGoogle;
