import { Button, ErrorMessage, Input } from "common/Components";
import React, { useState } from "react";
import { RenderInputFieldProps, SignupFormDataType } from "../Modals";
import { signupInitialObj } from "../Constants";
import { addNewUser, getSignupFieldName } from "../helper";
import { useNavigate } from "react-router-dom";

export const RenderInputField = ({
  name,
  value,
  handleChange,
  error,
}: RenderInputFieldProps) => {
  return (
    <>
      <div className="font-bold">{getSignupFieldName(name)}</div>
      <Input
        name={name}
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
      />
      <ErrorMessage error={error} />
    </>
  );
};

const Signup = () => {
  const [formData, setFormData] =
    useState<SignupFormDataType>(signupInitialObj);
  const [errors, setErrors] = useState<SignupFormDataType>(signupInitialObj);
  const navigate = useNavigate();
  const signupInitialObjs = {
    name: "",
    email: "",
    mobile: "",
    location: "",
    role: "",
    password: "",
    confirmPassword: "",
  };
  const validate = (name: string, value: string) => {
    const PASSWORD_PATTERN =
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*<>]).{8,}$/;
    const NAME_REGEX = /^[a-z]{3,}/;
    const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const MOBILE_PATTERN = /\d{10}/;
    // const EMAIL_PATTERN = /^[a-z][a-z0-9]+@[a-z]+(?:[.][a-z]{2,}+$)/
    let error = "";
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
      return "This field is required";
    }
    switch (name) {
      case "role":
      case "location":
      case "name": {
        if (NAME_REGEX.test(value)) {
          error = "";
        } else {
          error = "Min. 3 chars required";
        }
        break;
      }
      case "email": {
        if (EMAIL_PATTERN.test(value)) {
          error = "";
        } else {
          error = "Email is not valid";
        }
        break;
      }
      case "mobile": {
        if (MOBILE_PATTERN.test(value)) {
          error = "";
        } else {
          error = "Mobile number is not valid";
        }
        break;
      }
      case "password": {
        if (PASSWORD_PATTERN.test(value)) {
          error = "";
        } else {
          error =
            "Min 8 chars required, One Upercase, lowercase, digit, symbol";
        }
        break;
      }
      case "confirmPassword": {
        if (formData.password === value) {
          error = "";
        } else {
          error = "Confirm password not matching"
        }
        break;
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error
  };
  const handleChange = (name: string, value: string) => {
    console.log("NAME:::", name, value);
    validate(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    console.log("User Registered", formData);
    const getErrors = Object.keys(formData).map(field => {
      return validate(field, formData[field])
    })
    console.log("SUBMIT::", getErrors)
    //addNewUser(formData);
    //navigate("/login-form/login");
  };
  return (
    <div>
      <h3 className="font-bold text-lg">Sign Up Form</h3>
      {Object.keys(signupInitialObj).map((field, i) => (
        <RenderInputField
          key={i}
          handleChange={handleChange}
          name={field}
          value={formData[field]}
          error={errors[field]}
        />
      ))}
      <div>
        <Button onClick={handleSubmit} title="Submit" />
      </div>
    </div>
  );
};

export default Signup;
