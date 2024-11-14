// function addition(num1, num2){//num1 and num2 is parameter here
//     console.log(num1+num2)
// }

// addition(4, 5) // 4, 5 is argument here 

function addition(num1, num2){

    let result=num1+num2
    return result

}

const ans=addition(4, 6)
console.log(ans)

function userLogin(username){
    if(!username){
        console.log("Enter the user name ")
    }
    return `${username} just login`
}

console.log(userLogin("dubey"))


function calculate(...number1){//"..."it is rest as well as spread operstor depend upon the usecase 
    return number1

}
console.log(calculate(200, 300, 500))

// const user={
//     username:"Priya",
//     price:200
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}
// handleObject(user) 
handleObject({
    username:"Natasha",
    price:6000

})