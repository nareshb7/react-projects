const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*<>]).{8,}$/;
const NAME_REGEX = /^\w{3,}/;
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const MOBILE_PATTERN = /\d{10}/;

export const validator = (name: string, value: string, psd: string = "") => {
  let error = "";
  switch (name) {
    case "role":
    case "location":
    case "name": {
      if (NAME_REGEX.test(value)) {
        error = "";
      } else {
        error = "Min. 3 chars required";
      }
      break;
    }
    case "email": {
      if (EMAIL_PATTERN.test(value)) {
        error = "";
      } else {
        error = "Email is not valid";
      }
      break;
    }
    case "mobile": {
      if (MOBILE_PATTERN.test(value)) {
        error = "";
      } else {
        error = "Mobile number is not valid";
      }
      break;
    }
    case "password": {
      if (PASSWORD_PATTERN.test(value)) {
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
