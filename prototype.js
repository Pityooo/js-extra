// minden objektum sémának van egy váza (blueprint) --> ez a prototype, melyek főleg metódusokat, funkciókat takarnak (pl. push(), find(), join())
// null olyan prototype aminek nincs semmilyen tulajdonsága, kulcsértékpárja (ez a prototype lánc legvége)
/* 
const obj1 = {};
console.dir(obj1); // --> {}

const obj2 = new Object();
console.dir(obj2); // --> {}

const arr1 = [];
console.dir(arr1); // --> []

const arr2 = new Array();
console.dir(arr2); // --> []
*/

// saját object constructor
function User (name){
    this.name = name
    this.iam = function(){
        console.log(`I'am ${this.name}`)
    }
}
/* 
const user1 = new User('Pisti')
user1.iam()

const user2 = new User('Béla')
user2.iam()
*/
/* 
// ritkán indokolt a példány szintű metódusok létrehozása
// mivel a prototípusban hozzuk létre a metódust, így ha létrehozunk egy új Usert, akkor az megkapja ezt az iam2-t prototype szinten, ezért nem jelenik meg magán az objektumonkun
User.prototype.iam2 = function(){
    console.log(`I'am ${this.name}2`)
}
const user3 = new User ('Dávid');
console.dir(user3) // nem jelenik meg az iam2 metódus
user3.iam2()  // de le tudjuk futtatni az iam2-t
*/
/* 
const user3Proto = Object.getPrototypeOf(user3) // hivatalos mód prototype-hoz
console.log(user3Proto)

const user3Proto = user3.__proto__ // nem hivatalos mód prototype-hoz
console.log(user3Proto)
*/
// Class extends megoldása object constructorral (call method)
function CustomUser(name, role) {
    User.call(this, name) // behívjuk az előző constructort
    this.role = role // hozzátesszük a role-t
}
const user4 = new CustomUser('Ági', 'DevOPS')
console.dir(user4)