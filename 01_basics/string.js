let name="Priyanshu"
let age="21"
console.log(`This is ${name.toUpperCase()} and the age is ${age}`)
// the (``) backticks is used to define the string because in this we made a different placeholder for the different place

const jamjam = new String('priyanshu_dubey_Engineering_graduate_trainee')
console.log(jamjam.charAt(2))
console.log(jamjam.indexOf('y'))

const subString=jamjam.substring(0, 4)
console.log(subString)

const Slice=jamjam.slice(3, 7)
console.log(Slice)

const Trim="      priya        "
console.log(Trim)
console.log(Trim.trim())// it is used for whitespace 

const url="https://priyanshu@20dubey"
console.log(url.replace('@20', '-'))
console.log(url.includes("raghav"))
console.log(jamjam.split('_'))
