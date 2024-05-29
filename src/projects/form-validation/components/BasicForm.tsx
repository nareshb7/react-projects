import React, { useState } from 'react'
import { validate } from '../helper';
import { ErrorMessage, Input } from 'common/Components';
import { FormFields } from '../types';
import { initialFormFields, statesList } from '../constant';

const BasicForm = () => {
    const [formData, setFormData] = useState<FormFields>(initialFormFields);
  const [userData, setUserData] = useState<FormFields>(initialFormFields);
  const [errors, setErrors] = useState<FormFields>(initialFormFields);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    // If there is error then only we will cal validator function
    if (errors[name]) {
      validator(name, value);
    }
  };
  const validator = (name: string, value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
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
    }
  };
  return (
    <div><div>
    <div>
      <label className="font-bold">Name</label>
      <Input
        value={formData.name}
        onBlur={(e) => validator("name", e.target.value)}
        onChange={(e) => handleChange("name", e.target.value)}
        name="name"
        placeholder="Enter Name"
      />
    </div>
    <ErrorMessage error={errors.name} />
  </div>
  <div>
    <div>
      <label className="font-bold">Email</label>
      <Input
        value={formData.email}
        onBlur={(e) => validator("email", e.target.value)}
        onChange={(e) => handleChange("email", e.target.value)}
        name="email"
        placeholder="Enter Email"
      />
    </div>
    <ErrorMessage error={errors.email} />
  </div>
  <div>
    <div>
      <label className="font-bold">Mobile</label>
      <Input
        value={formData.mobile}
        onBlur={(e) => validator("mobile", e.target.value)}
        onChange={(e) => handleChange("mobile", e.target.value)}
        name="mobile"
        placeholder="Enter Mobile number"
      />
    </div>
    <ErrorMessage error={errors.mobile} />
  </div>
  <div>
    <div>
      <label className="font-bold">DOB</label>
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
  <div>
    <div>
      <span className="font-bold">Gender: </span>
      <label>
        <Input
          name="gender"
          value="Male"
          type="radio"
          onChange={(e) => handleChange("gender", e.target.value)}
        />
        Male
      </label>
      <label>
        <Input
          name="gender"
          value="FeMale"
          type="radio"
          onChange={(e) => handleChange("gender", e.target.value)}
        />
        FeMale
      </label>
      <label>
        <Input
          name="gender"
          value="Not Specified"
          type="radio"
          onChange={(e) => handleChange("gender", e.target.value)}
        />
        Not Specified
      </label>
    </div>
    <ErrorMessage error={errors.gender} />
  </div>
  <div>
    <div>
      <label className="font-bold">Age</label>
      <Input
        value={formData.age as string}
        onBlur={(e) => validator("age", e.target.value)}
        onChange={(e) => handleChange("age", e.target.value)}
        name="age"
        placeholder="Enter your age"
      />
    </div>
    <ErrorMessage error={errors.age as string} />
  </div>
  <div>
    <span className="font-bold">State:</span>
    <select
      onChange={(e) => handleChange("state", e.target.value)}
      onBlur={(e) => validator("state", e.target.value)}
      className="p-2 border"
    >
      <option value="">Select an Option</option>
      {statesList.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
    <ErrorMessage error={errors.state as string} />
  </div>
  <div>
    <div>
      <label className="font-bold">Password</label>
      <Input
        value={formData.password}
        onBlur={(e) => validator("password", e.target.value)}
        onChange={(e) => handleChange("password", e.target.value)}
        name="password"
        placeholder="Enter your Password"
      />
    </div>
    <ErrorMessage error={errors.password} />
  </div></div>
  )
}

export default BasicForm