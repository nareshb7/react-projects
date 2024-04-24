import React from "react";
import { ButtonProps, InputProps } from "./Modals";

export const Button = ({
  title,
  onClick,
  styles,
  className = "px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1",
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={styles}
      className={className}
      {...buttonProps}
    >
      {title}
    </button>
  );
};

export const Input = ({
  value,
  onChange,
  styles,
  className = "",
  ...inputProps
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      style={styles}
    />
  );
};
