//singleton

const mysym=Symbol("key1")
// object literals
const user={
    name:"Priyanshu",
    [mysym]:"mykey1",
    age:18,
    "full name":"Priyanhu dubey",
    days:["Monday", "Tuesday"],
    email:"priya@gmail.com"

}

console.log(user)//we cannot access through this way

console.log(user.age)
console.log(user.email)
console.log(user["full name"])

user.greeting = function(){
    console.log(`Hello world, ${this.name}`);

}
console.log(user.greeting());

