import React from "react";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium dark:text-text3 text-text2 cursor-pointer inline-block ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
