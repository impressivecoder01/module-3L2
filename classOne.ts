//oop - class - object
// class Animal {
//     name: string;
//     species: string;
//     sound: string;
//     constructor(name: string, species: string,  sound: string){
//         this.name = name,
//         this.species = species
//         this.sound = sound
//     }
//     makeSound(){
//         console.log(`${this.name} is making sound ${this.sound}`)
//     }
// }
// parameter properties
class Animal {
    //  name: string;
    // species: string;
    // sound: string;
    constructor(public name: string, public species: string, public sound: string){
        // this.name = name,
        // this.species = species
        // this.sound = sound
    }
    // makeSound(){
    //     console.log(`${this.name} is making sound ${this.sound}`)
    // }
}

const dog = new Animal('kutta', 'dog', 'ghew ')
console.log(dog.name);
const cat = new  Animal('bilai', 'cat', 'mew mew')
console.log(cat);
// cat.makeSound()