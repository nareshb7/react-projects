import { statesList } from "../constant";
import { ConfigData } from "../types";

export const config: ConfigData[] = [
  {
    title: "Name",
    key: "name",
    type: "text",
    placeholder: "Enter Name...",
  },
  {
    title: "Email",
    key: "email",
    type: "text",
    placeholder: "Enter Email...",
  },
  {
    title: "Mobile",
    key: "mobile",
    type: "text",
    placeholder: "Enter Mobile...",
  },
  {
    title: "Date of Birth",
    key: "dob",
    max: new Date().toISOString().split("T")[0],
    type: "date",
    placeholder: "Enter DOB...",
  },
  {
    title: "Gender",
    key: "gender",
    options: [
      { title: "Male", value: "male" },
      { title: "FeMale", value: "female" },
      { title: "Not Specifid", value: "other" },
    ],
    type: "radio",
  },
  {
    title: "Age",
    key: "age",
    type: "text",
    placeholder: "Enter Age...",
  },
  {
    title: "State",
    key: "state",
    type: "select",
    options: statesList,
  },
  {
    title: "Profile Image",
    key: "file",
    type: "file",
  },
  {
    title: "Password",
    key: "password",
    type: "password",
    placeholder: "Enter Password...",
  },
];
