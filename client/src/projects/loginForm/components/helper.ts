import { emailPattern, mobilePattern, namePattern, passwordPattern } from "utils/Constants";


export const validator = (name: string, value: string, psd: string = "") => {
  let error = "";
  switch (name) {
    case "role":
    case "location":
    case "name": {
      if (namePattern.test(value)) {
        error = "";
      } else {
        error = "Min. 3 chars required";
      }
      break;
    }
    case "email": {
      if (emailPattern.test(value)) {
        error = "";
      } else {
        error = "Email is not valid";
      }
      break;
    }
    case "mobile": {
      if (mobilePattern.test(value)) {
        error = "";
      } else {
        error = "Mobile number is not valid";
      }
      break;
    }
    case "password": {
      if (passwordPattern.test(value)) {
        error = "";
      } else {
        error = "Min 8 chars required, One Upercase, lowercase, digit, symbol";
      }
      break;
    }
    case "confirmPassword": {
      if (psd === value) {
        error = "";
      } else {
        error = "Confirm password not matching";
      }
      break;
    }
  }
  return error;
};
