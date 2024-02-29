import React from "react";
import { useController } from "react-hook-form";

const Input = (props) => {
  const {
    name,
    control,
    type = "text",
    id,
    error = "",
    placeholder,
    children,
    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`relative w-full py-4 px-6 border rounded-xl text-sm font-medium  dark:placeholder:text-text2 dark:text-white placeholder:text-text4 bg-transparent ${
          error.length > 0
            ? "border-error text-error"
            : "bg-strock text-text1 dark:bg-darkStroke"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-2/4 left-6 pointer-events-none">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};

export default Input;
