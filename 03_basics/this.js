const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {// the " this " is to give the current context which is in the object functions 
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// here the it give the undefine bcz their is no globle context

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {// this is the arrow function
    let username = "hitesh"
    console.log(this);// the this is not used in function it only used in the obect or object function 
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )//This is one-lineer which is the  not need to write a return 

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// In JavaScript, an arrow function is a concise way to write anonymous function expressions: 
// Syntax
// Arrow functions use the fat arrow operator => to define functions with or without parameters. They have a shorter syntax than traditional functions and can omit the function and return keywords. 
// Features
// Arrow functions are anonymous, meaning they don't have a name or an identifier. They also don't have their own bindings to this, arguments, or super. 
// Benefits
// Arrow functions make code more readable and structured. They're especially useful for simple one-liner functions. 
// Use cases
// Arrow functions are great for situations where you don't need to name the function, such as callbacks. You can also use them to create an Immediately Invoked Function Expression (IIFE). 
// Limitations
// Arrow functions can't be used as constructors. They also shouldn't be used as methods. 