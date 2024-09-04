import { Button, ErrorMessage, Input } from "common/Components";
import React, { useState } from "react";
import { RenderInputFieldProps, SignupFormDataType } from "../Modals";
import { signupInitialObj } from "../Constants";
import { addNewUser, getSignupFieldName } from "../helper";
import { useNavigate } from "react-router-dom";
import { validator } from "./helper";

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
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const validate = (name: string, value: string) => {
    let error = "";
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
      return "This field is required";
    }
    const psd = name === "confirmPassword" ? formData.password : "";
    error = validator(name, value, psd);
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };
  const handleChange = (name: string, value: string) => {
    validate(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    const errorCount = Object.keys(formData).filter((field) => {
      return validate(field, formData[field]);
    }).length;
    if (errorCount == 0) {
      const error = addNewUser(formData);
      setSignupError(error);
      if (!error) {
        navigate("/login-form/login");
      }
    }
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
        <ErrorMessage error={signupError} />
        <Button onClick={handleSubmit} title="Submit" />
      </div>
    </div>
  );
};

export default Signup;
