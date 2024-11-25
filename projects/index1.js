const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
// console.log(button)// this give the nodelist so we can use the foreach 

buttons.forEach(function(buttn){
    // console.log(button)
    buttn.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }

    })


});