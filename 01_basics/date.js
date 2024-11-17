let myDate= new Date()
// console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

let createdDate=new Date(12, 0, 23)
console.log(createdDate.toDateString())

let myTimestamp=Date.now()
console.log(myTimestamp)

let newDate= new Date()
console.log(newDate)
console.log(newDate.getDay().toString())
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1)