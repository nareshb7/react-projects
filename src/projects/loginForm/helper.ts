import { SignupFieldNames } from "./Constants"
import { LoginFormData, SignupFormDataType } from "./Modals"

export const getSignupFieldName = (name: string) => {
    return SignupFieldNames[name]
}
export const getLocalStoragData = (name: string)=> {
    return localStorage.getItem(name)
}
export const clearLocalStoragData = (name: string)=> {
    return localStorage.removeItem(name)
}
export const setLocalStoragData = (name: string, data: string)=> {
    return localStorage.setItem(name,data)
}
export const addNewUser = (data: SignupFormDataType)=> {
    const  previousData = getLocalStoragData("formUsers")
    console.log("PREVIOUS:::", previousData)
    if (previousData) {
        const updated:SignupFormDataType[]  = JSON.parse(previousData)
        const isExisted = updated.find(user => user.mobile === data.mobile)
        if (isExisted) {
            return "Mobile Number is already registered, please use login"
        }
        updated.push(data)
        localStorage.setItem("formUsers",JSON.stringify(updated) )
        setLocalStoragData("formUsers",JSON.stringify(updated))
    } else {
        setLocalStoragData("formUsers",JSON.stringify([data]))
    }
    return ""
}


export const verifyLogin = ({mobile, password}: LoginFormData)=> {
    const data = getLocalStoragData("formUsers")
    if(data) {
        const previousData: SignupFormDataType[] = JSON.parse(data)
        const isUser = previousData.find(user => user.mobile === mobile)
        if (isUser) {
            const isPaswrdSame = isUser.password == password
            if (isPaswrdSame) {
                setLocalStoragData("formLoggedInUser", JSON.stringify(isUser))
                return isUser
            } else {
                return "Password not matching"
            }
        }else {
            return "User Not Found"
        }
    }else {
        return "No Records matching"
    }
}