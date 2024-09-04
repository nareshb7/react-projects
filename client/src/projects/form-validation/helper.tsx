import {
  ageLimit,
  emailPattern,
  mobilePattern,
  namePattern,
  passwordPattern,
} from "utils/Constants";
import { RenderFieldProps } from "./types";
import React from "react";
import { ErrorMessage, Input } from "common/Components";
import { inputTypes } from "./constant";

export const get18YearsAgo = () => {
  const today = new Date();
  const pastDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  return pastDate;
};

export const validate = (name: string, value: string) => {
  let error = "";
  if (name === "name") {
    if (!namePattern.test(value)) {
      error = "Name must contain only alphabets";
    }
  }
  if (name === "dob") {
    const pastDate = get18YearsAgo();
    const selectedDate = new Date(value);
    if (selectedDate > pastDate) {
      error = "User Must has 18 years";
    }
  }
  if (name === "email") {
    if (!value.match(emailPattern)) {
      error = "Email is not valid";
    }
  }
  if (name === "mobile") {
    if (!value.match(mobilePattern)) {
      error = "Enter valid mobile number";
    }
  }
  if (name == "age") {
    const age = Number(value);
    if (age < ageLimit.min || age > ageLimit.max) {
      error = "Age must be in the 18 to 99";
    }
  }

  if (name === "password") {
    if (!value.match(passwordPattern)) {
      error =
        "Kin 8 chars, One capital, lne lower , one digit, one special char";
    }
  }
  return error;
};

export const RenderField = ({
  field,
  value,
  error,
  validator,
  handleChange,
}: RenderFieldProps) => {
  const { key, type, title, placeholder, options } = field;
  const getComponent = (type: string) => {
    if (inputTypes.includes(type)) {
      return (
        <Input
          value={value}
          onBlur={(e) => validator(key, e.target.value)}
          onChange={(e) => handleChange(key, e.target.value)}
          name={key}
          placeholder={placeholder}
          type={type}
        />
      );
    }
    if (type === "file") {
      return (
        <Input
          onBlur={(e) => validator(key, e.target.value)}
          onChange={(e) =>
            handleChange(key, e.target.files ? e.target.files[0] : "")
          }
          name={key}
          placeholder={placeholder}
          type={type}
        />
      );
    }
    if (type === "radio") {
      return (
        <>
          {/* <span className="font-bold inline-block w-90">{title} </span> */}
          {options &&
            options?.map((option) => {
              return (
                <label key={option.value}>
                  <Input
                    name={key}
                    value={option.value}
                    type={type}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                  {option.title}
                </label>
              );
            })}
        </>
      );
    }
    if (type === "select") {
      return (
        <select
          onChange={(e) => handleChange(key, e.target.value)}
          onBlur={(e) => validator(key, e.target.value)}
          className="p-2 border mx-1"
        >
          <option value="">Select an Option</option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
        </select>
      );
    }
  };

  return (
    <div key={key} className="my-1">
      <span className="font-bold inline-block w-28">{title}</span>
      {getComponent(type)}
      <ErrorMessage error={error} className="ml-32" />
    </div>
  );
};
// export const RenderField =({field}: RenderFieldProps)=> {
//     return
// }
