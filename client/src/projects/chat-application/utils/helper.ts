import { roomIdPattern } from "./Constants";

export const generateRandomString =()=> Math.random().toString(36)

export const generateRoomId =() => {
    const random = generateRandomString().substr(2,10)
    return `${random.slice(0,3)}-${random.slice(3,7)}-${random.slice(7)}`
}
export const validator = (name: string, value: string) => {
    switch (name) {
      case "name": {
        if (!value) {
          return "Name Required";
        }
        if (value.length < 3) {
          return "Min 3 chars required";
        }
        break;
      }
      case "roomNo": {
        if (!value) {
          return "Room Id required";
        }
        if (!value.match(roomIdPattern)) {
          return "Enter valid Room Id";
        }
        break;
      }
      default:
        return "";
    }
  };