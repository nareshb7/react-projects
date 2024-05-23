export const generateRandomString =()=> Math.random().toString(36)

export const generateRoomId =() => {
    const random = generateRandomString().substr(2,10)
    return `${random.slice(0,3)}-${random.slice(3,7)}-${random.slice(7)}`
}