import { Button, ErrorMessage, Input } from "common/Components";
import React, { useState } from "react";
import { verifyLogin } from "../helper";
import { LoginFormData } from "../Modals";
import { useNavigate } from "react-router-dom";
import { validator } from "./helper";

const initialLoginObj ={
  mobile: "",
  password: "",
}

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState<LoginFormData>(initialLoginObj);
  // login in validation
  const [errors, setErrors] = useState(initialLoginObj)
  const [errorMessage, setErrorMessage] = useState("")
  const validate = (name: string, value: string) => {
    let error = "";
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
      return "This field is required";
    }
    error = validator(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };
  const handelChange = (name:string,value: string) => {
    validate(name, value)
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = () => {
    const errorCount = Object.keys(loginData).filter((field) => {
      return validate(field, loginData[field]);
    }).length;
    if (errorCount === 0) {
      const response = verifyLogin(loginData)
      if (typeof response === "string") {
        setErrorMessage(response)
      } else {
      navigate("/login-form/home")
      }
    }
    
  };
  return (
    <>
      <h3 className="font-bold text-lg">Login Form</h3>
      <div>
        <div className="font-bold">Mobile: </div>
        <Input name="mobile" value={loginData.mobile} onChange={(e)=> handelChange("mobile", e.target.value)} />
        <ErrorMessage error={errors.mobile} />
      </div>
      <div>
        <div className="font-bold">Password: </div>
        <Input name="password" value={loginData.password} onChange={(e)=> handelChange("password", e.target.value)} />
        <ErrorMessage error={errors.password} />
      </div>
      <div>
        <Button onClick={handleSubmit} title="Submit" />
      </div>
      <div style={{color: "#f00"}}>{errorMessage}</div>
    </>
  );
};

export default Login;
