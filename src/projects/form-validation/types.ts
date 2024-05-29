export interface ConfigData{
    title: string;
    key: string;
    type: string;
    options?: {title: string, value:string}[];
    max?: string;
    placeholder?: string;
  }

  export type Gender = "Male" | "Female" | "Other";

export interface FormFields {
  name: string;
  email: string;
  mobile: string;
  password: string;
  gender: Gender;
  dob: string;
  age: number | string;
  state: string;
  [key: string]: any;
}

export interface ViewPageProps {
    userData: FormFields;
    onBack: ()=> void
}

export interface RenderFieldProps {
    field: ConfigData,
    value: string,
    error: string,
    validator: (name: string, value: string) => void,
    handleChange: (name: string, value: string) => void
  }