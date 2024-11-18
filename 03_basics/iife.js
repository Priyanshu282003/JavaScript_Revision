// Immediately Invoked Function Expressions (IIFE)
//Global scope k pollution se hatane k line IIFE ka use hota hai
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

// (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();

(function chai(){
    console.log("Hello world")
})();

( ()=>{
    console.log("Hello world2");
})()


