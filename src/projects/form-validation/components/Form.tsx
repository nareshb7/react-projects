import { Button } from "common/Components";
import React, { useState } from "react";
import { RenderField, validate } from "../helper";
import ViewPage from "./ViewPage";
import { FormFields } from "../types";
import { config } from "./config";
import { initialFormFields } from "../constant";

const Form = () => {
  const [formData, setFormData] = useState<FormFields>(initialFormFields);
  const [userData, setUserData] = useState<FormFields>(initialFormFields);
  const [errors, setErrors] = useState<FormFields>(initialFormFields);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (name: string, value: string | File) => {
    if (name === "file") {
      if (value) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, [name]: reader.result });
        };
        reader.readAsDataURL(value as File);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // If there is error then only we will cal validator function
    if (errors[name]) {
      validator(name, value as string);
    }
  };
  const validator = (name: string, value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required." }));
      return;
    }
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  const handleSubmit = () => {
    const formTotal = Object.entries(formData);
    const formDataLength = formTotal.filter((val) => val[1]).length;
    const errorsLength = Object.values(errors).filter((val) => val).length;
    if (errorsLength === 0 && formDataLength === formTotal.length) {
      setUserData(formData);
      setIsSubmitted(true);
    } else {
      formTotal.map((field) => {
        validator(field[0], field[1]);
      });
      setIsSubmitted(false);
      setUserData(initialFormFields);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <ViewPage userData={userData} onBack={() => setIsSubmitted(false)} />
      ) : (
        <>
          {config.map((field) => (
            <RenderField
              key={field.key}
              field={field}
              error={errors[field.key]}
              value={formData[field.key]}
              validator={validator}
              handleChange={handleChange}
            />
          ))}
          <div>
            <Button title="Submit" onClick={handleSubmit} />
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
