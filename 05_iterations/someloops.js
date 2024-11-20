// for of

// const arr=[1, 3, 5, 6, 8, 9]

// for (const i of arr) {
//     console.log(i)
    
// }


// const greet="Hello world"

// for (const i of greet) {
//     console.log(i)
// }

//Maps

const map= new Map()

map.set('IN', 'INDIA')
map.set('UAE', 'DUBAI')
map.set('UK', 'UNITED KINGDOM')

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }