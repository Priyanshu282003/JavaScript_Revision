//stack memory:- In this all primitive type data is store 
//In this we get a copy of the memory
//Heap memory:- In this all non-primitive datatype is store
//In this we get the reference of the memory by which directly change in the memory 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack Example++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let name="Priya"
let fname=name
console.log(fname)
fname="Dubey"
console.log(fname)
console.log(name)

//Heap Example+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let mark={
    name:"Priyanshu",
    email:"priysnh123@gmail.com"
}

let mark2=mark
mark2.name="Priya"
console.log(mark)
