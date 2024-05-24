export const get18YearsAgo =()=> {
    const today = new Date()
    const pastDate =new Date(today.getFullYear() -18, today.getMonth(), today.getDate())
    return pastDate
}