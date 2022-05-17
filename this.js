/* 
"use strict"
console.log(this) // --> {} , böngészőben a window (global object)
*/ 

/*
// Immediately Invoked Function Expression - IIFE --> így ugyan azt látjuk node-ban, mint amit a böngésző hoz vissza
(function() {
    "use strict" // ha ez bent van, akkor undefined (strict mode-ban a this nem fogja a window-t mutatni)
    console.dir(this)
})()
*/

const user = {
    name: 'Béla',
    getName:  function(){
        console.log('1' + this);  // a this eléri az objektumot
        (function() {
            console.log('2' + this) // metoduson belüli függvény az globális objektumot fogja visszaadni(vagy undefined-et)
        })()
        const af = () => {
            console.log('3' + this) // metoduson belüli arrow function a parentnak a this-ét veszi át (objektumra mutat)
        }
        af()
    }
}
//user.getName()
const ugn = user.getName  // nem ugyan az külön meghívva, és változóba mentve meghívva
ugn()

// call, apply, bind
