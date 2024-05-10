export interface SignupFormDataType {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  location: string;
  role: string;
  [key: string]: string;
}

export interface RenderInputFieldProps {
  name: string;
  value: string;
  handleChange: (name: string, value: string) => void;
  error: string;
}

export interface LoginFormData {
  mobile: string;
  password: string;
  [key:string]: string;
}
