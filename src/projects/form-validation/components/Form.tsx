import { ErrorMessage, Input } from "common/Components";
import React, { useState } from "react";
import { get18YearsAgo } from "../helper";

export type Gender = "Male" | "Female" | "Other";

export interface FormFields {
  name: string;
  email: string;
  mobile: string;
  password: string;
  gender: Gender;
  dob: string;
  age: number | null;
  state: string;
  [key: string]: any;
}
export const initialFormFields = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  gender: "" as Gender,
  dob: "",
  age: null,
  state: "",
};

export const namePattern = /^[A-z]+$/;

const Form = () => {
  const [formData, setFormData] = useState<FormFields>(initialFormFields);
  const [errors, setErrors] = useState<FormFields>(initialFormFields);
  const handleChange = (name: string, value: string) => {
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
    // If there is error then only we will cal validator function
    if (errors[name]) {
      validator(name, value);
    }
  };
  const validator = (name: string, value: string) => {
    console.log("BLURRR::::", name, value);
    let error = "";

    if (!value) {
      setErrors({ ...errors, [name]: "This field is required" });
      return;
    }
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
    setErrors({ ...errors, [name]: error });
  };
  return (
    <div>
      <div>
        <div>
          <label>Name</label>
          <Input
            value={formData.name}
            onBlur={(e) => validator("name", e.target.value)}
            onChange={(e) => handleChange("name", e.target.value)}
            name="name"
          />
        </div>
        <ErrorMessage error={errors.name} />
      </div>
      <div>
        <div>
          <label>DOB</label>
          <Input
            max={new Date().toISOString().split("T")[0]}
            value={formData.dob}
            onBlur={(e) => validator("dob", e.target.value)}
            type="date"
            onChange={(e) => handleChange("dob", e.target.value)}
          />
        </div>
        <ErrorMessage error={errors.dob} />
      </div>
    </div>
  );
};

export default Form;
