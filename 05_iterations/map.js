const myNumber=[1, 3, 4, 5, 7, 9, 12, 12, 23]
// const newNumber=myNumber.map((num)=>{
//     return num+10

// })

const newNum=myNumber
.map((num)=>(num*10))
.map((num)=>num+1)
.filter((num)=> num>40)
console.log(newNum)
//map is also the callback function 
// A callback function is a function that 
// is passed as an argument to another function and is executed by that function at a later point, often in response to some event or after some operation.
// Purpose of map in this Code
// Iterates Through the Array:

// The map method loops through each element in the array myNumber.
// Applies the Transformation:

// For each element, the callback function (num) => num + 10 is applied. This transformation adds 10 to the value of the current element.
// Returns a New Array:

// The result of the transformation for each element is collected into a new array, newNumber, without modifying the original array (myNumber remains unchanged).
