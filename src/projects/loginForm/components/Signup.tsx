import { Button, Input } from "common/Components";
import React, { useState } from "react";
import { RenderInputFieldProps, SignupFormDataType } from "../Modals";
import { signupInitialObj } from "../Constants";
import { addNewUser, getSignupFieldName } from "../helper";
import { useNavigate } from "react-router-dom";

export const RenderInputField = ({
  name,
  value,
  handleChange,
}: RenderInputFieldProps) => {
  return (
    <>
      <div className="font-bold">{getSignupFieldName(name)}</div>
      <Input
        name={name}
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormDataType>(signupInitialObj);
  const navigate = useNavigate()
  const handleChange = (name: string, value: string) => {
    console.log("NAME:::", name, value)
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit =()=> {
    console.log('User Registered', formData)
    addNewUser(formData)
    navigate("/login-form/login")
  }
  return (
    <div>
      <h3 className="font-bold text-lg">Sign Up Form</h3>
      {Object.keys(signupInitialObj).map((field, i) => (
        <RenderInputField
          key={i}
          handleChange={handleChange}
          name={field}
          value={formData[field]}
        />
      ))}
       <div>
        <Button onClick={handleSubmit} title="Submit" />
      </div>
    </div>
  );
};

export default Signup;
