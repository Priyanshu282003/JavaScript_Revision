const numb=new Number(100.52345)
console.log(numb)

console.log(numb.toString().length)
console.log(numb.toFixed(2))
console.log(numb.toPrecision(3))

const numbers=1000000
console.log(numbers.toLocaleString('en-IN'))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MATHS

console.log(Math.abs(-7))
console.log(Math.max(4, 31, 2, 1))
console.log(Math.floor(4.6))
console.log(Math.ceil(5.9))

console.log((Math.random()*10)+1)

const max=6
const min=0
console.log(Math.floor(Math.random()* (max-min+1))+min)
