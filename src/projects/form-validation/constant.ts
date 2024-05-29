import { Gender } from "./types";

export const statesList = [
  { title: "Telangana", value: "TS" },
  { title: "Andhra Pradesh", value: "AP" },
  { title: "Karnataka", value: "KA" },
  { title: "Maharastra", value: "MH" },
  { title: "Tamil Nadu", value: "TN" },
  { title: "Kerala", value: "KL" },
];

export const initialFormFields = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  gender: "" as Gender,
  dob: "",
  age: "",
  state: "",
};

export const formFieldTitle: any = {
  name: "Name",
  email: "Email",
  mobile: "Mobile",
  password: "Password",
  gender: "Gender",
  dob: "Date of Birth",
  age: "Age",
  state: "State",
};

export const inputTypes = ["text", "date", "password"];

