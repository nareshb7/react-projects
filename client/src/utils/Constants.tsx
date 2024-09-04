export const DUMMY = "DUMMY"
export const emailPattern = /^[a-z][a-z0-9]+@[a-z]+(?:[.][a-z]{2,})+$/
export const passwordPattern =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*<>]).{8,}$/;
export const namePattern = /^[a-zA-Z]{3,}$/;
// export const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
export const mobilePattern = /^\d{10}$/;
export const ageLimit = {min: 18, max: 99}

export const WEATHER_API_KEY = process.env.WEATHER_API_KEY
const SERVER_BE_URL = "https://react-projects-pdiv.onrender.com"
const LOCAL_BE_URL = "http://192.168.10.30:8081";
export const BE_URL = SERVER_BE_URL
