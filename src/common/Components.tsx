import React from "react";
import { ButtonProps, ErrorMessageProps, InputProps } from "./Modals";

export const Button = ({
  title,
  onClick,
  styles,
  className = "",
  disabled,
  type,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={styles}
      className={` px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1 ${className}`}
      disabled={disabled}
      type={type}
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
  className = "border border-blue-500 input rounded mx-1",
  onKeyDown,
  name,
  placeholder,
  ...inputProps
}: InputProps) => {
  return (
    <input
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      className={className}
      style={styles}
      placeholder={placeholder}
      name={name}
      {...inputProps}
    />
  );
};

export const ErrorMessage =({error, className}:ErrorMessageProps)=> {
  return error ? <div className={`text-error ${className}`}>{error}</div>:<></>
}
