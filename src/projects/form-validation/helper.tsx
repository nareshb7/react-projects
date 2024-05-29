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
  if (inputTypes.includes(type)) {
    return (
      <div key={key}>
        <label className="font-bold">{title}</label>
        <Input
          value={value}
          onBlur={(e) => validator(key, e.target.value)}
          onChange={(e) => handleChange(key, e.target.value)}
          name={key}
          placeholder={placeholder}
          type={type}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
  if (type === "file") {
    return (
      <div key={key}>
        <label className="font-bold">{title}</label>
        <Input
          onBlur={(e) => validator(key, e.target.value)}
          onChange={(e) =>
            handleChange(key, e.target.files ? e.target.files[0] : "")
          }
          name={key}
          placeholder={placeholder}
          type={type}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
  if (type === "radio") {
    return (
      <div key={key}>
        <span className="font-bold">{title} </span>
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
        <ErrorMessage error={error} />
      </div>
    );
  }
  if (type === "select") {
    return (
      <div key={key}>
        <span className="font-bold">{title}</span>
        <select
          onChange={(e) => handleChange(key, e.target.value)}
          onBlur={(e) => validator(key, e.target.value)}
          className="p-2 border"
        >
          <option value="">Select an Option</option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
        </select>
        <ErrorMessage error={error} />
      </div>
    );
  }
  return <></>;
};
// export const RenderField =({field}: RenderFieldProps)=> {
//     return
// }
