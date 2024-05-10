import { Button, Input } from "common/Components";
import React, { useState } from "react";
import { verifyLogin } from "../helper";
import { LoginFormData } from "../Modals";
import { useNavigate } from "react-router-dom";
const initialLoginObj ={
  mobile: "",
  password: "",
}

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState<LoginFormData>(initialLoginObj);
  // login in validation
  const [erros, setErrors] = useState(initialLoginObj)
  const [errorMessage, setErrorMessage] = useState("")
  const handelChange = (name:string,value: string) => {
    console.log("NAME::", name, value)
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = () => {
    console.log("LOGGED IN");
    const response = verifyLogin(loginData)
    if (typeof response === "string") {
      setErrorMessage(response)
    } else {
    navigate("/login-form/home")
    }
  };
  return (
    <>
      <h3 className="font-bold text-lg">Login Form</h3>
      <div>
        <div className="font-bold">Mobile: </div>
        <Input name="mobile" value={loginData.mobile} onChange={(e)=> handelChange("mobile", e.target.value)} />
      </div>
      <div>
        <div className="font-bold">Password: </div>
        <Input name="password" value={loginData.password} onChange={(e)=> handelChange("password", e.target.value)} />
      </div>
      <div>
        <Button onClick={handleSubmit} title="Submit" />
      </div>
      <div style={{color: "#f00"}}>{errorMessage}</div>
    </>
  );
};

export default Login;
