const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'

}

// for (const key in myObj) {
//     console.log(key);
// }
for (const key in myObj) {
    // console.log(myObj[key]);
}

const programming=["Dat", "Ruby", "kotlin", "Java"]
for (const key in programming) {
    // console.log(programming[key])//it give value other wise by default it give key
      
}
// this loop should able to itreate the in the map

//for each-loop

 const coding=["js", "DAA", "ruby", "python", "cpp"]
// coding.forEach(function (val){//In this call-back function is used which do not have a name 
//     // console.log(val);
// })

// coding.forEach( (item) => {// it is call_back arrow function do not need a name 
//     console.log(item);
// } )

function printme(item){
    // console.log(item);
}

coding.forEach(printme)


const myCoding=[
    {
        lang:"c++",
        langF:"cpp",
    },
    {
        lang:"javaScript",
        langF:"js"
    },
    {
        lang:"ruby",
        langF:"rb"
    },
]
// it is important iteration because from data base the value came in the form of the array and each value is a object

myCoding.forEach((item)=>{
    console.log(item.lang);// In this "item "have a access of the object 
})