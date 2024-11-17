//In JavaScript, scope is the context of the code that determines where variables and functions are accessible.
//"{}" It represent the scope 
let a= 300 // it is the global scope which is independent from the local scope  or we can say that block scope
if(true){
    let a=20
    const b=30
    var c=10
}

// console.log(a) these two value give error because it is out of scope 
// console.log(b)
console.log(c)// but there is problem with the var it can redeclare and can be access out of the scope that's why it 
// replace due to multiple user do' not use it togeather try to avoid the var