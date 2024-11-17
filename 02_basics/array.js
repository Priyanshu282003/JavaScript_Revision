const arr=[1, 2, 3, 4, 8, 5]
console.log(arr[0])

// Array Method

arr.push(23)
console.log(arr)
arr.unshift(3)
console.log(arr)
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.includes(7))
console.log(arr.indexOf(10))
console.log(arr.indexOf(8))

const newArr=arr.join()// it convert the array into the string 
console.log(arr)
console.log(newArr)
console.log(typeof(newArr))

// difference between slice and splice 

const newArray=arr.slice(1, 3)
console.log(arr)
console.log(newArray)

console.log(arr)
const newArray2=arr.splice(1, 3)
console.log(newArray2)
console.log(arr)