const userEmail="priya@123.com"
if(userEmail){
    console.log("Got user Email");
    
}
else{
    console.log("Not got the user email")
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// let username=[]
// if(username.length===0){
//     console.log("Array is empty");// to check wheather the object is empty or not
// }

const emptyObject={}

if(Object.keys(emptyObject).length===0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")