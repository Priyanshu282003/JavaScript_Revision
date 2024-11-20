// const coding=["js", "DAA", "ruby", "python", "cpp"]

// const value = coding.forEach((item) => {
//     console.log(item);

// })
// console.log(value);
// // for each  do not return the value

//filter

//The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

const myNum=[1, 2, 4, 5, 6, 8, 9]

const newNums=myNum.filter((num)=>{
    return num>4
})
// const newNums=myNum.filter((num)=>(num>5))

console.log(newNums)

// An explicit return is when you explicitly write the word return in the function. 
// To do an implicit return, remove the word return , then move what you are returning up to the same line as the rest of the function.


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
