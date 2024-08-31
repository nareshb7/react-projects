


const isDigit = (c: string)=> {
    const pattern = /^[0-9]+$/
  const s = c 
  return pattern.test(s)
}


export const calculate =(str: string)=> {
    let curr =0
    let op= "+"
    const stack: number[] =[]
    for (let i=0; i< str.length; i++) {{
        const c = str[i]
        if (isDigit(c)) {
            // 8 - 8*10 + c-"0"
            const val = parseInt(c, 10)
            curr = curr*10 + val
        }
        if (!isDigit(c) || i === str.length -1) {
            if (op === "+") {
                stack.push(curr)
            } else if (op=== "-") {
                stack.push(-curr)
            } else if (op === "*") {
                if (stack.length > 0) {
                    stack.push((stack.pop() ?? 1) * curr)
                }
            } else if (op === "/") {
                if (stack.length > 0) {
                    stack.push((stack.pop() ?? 1)/ curr)
                }
            }
            op = c
            curr = 0
        }
    }}
    return stack.reduce((a,b) => a+b, 0)
}