const person =  {  //objek
    name: 'john', //atribut
    age: 30,

    greet() { //fungsi
        console.log (`Hello my name is ${this.name}`)
    },
}

person.greet() 
console.log(person.age)
console.log(person.name)

//class dalam javascript

class Person {
    constructor(name, age) {
    this.name = name 
    this.age = age
}

greet() {
    console.log(`halo saya siapa ${this.name}.`)
    }
}

const saya = new Person ('John', 30)
saya.greet()
console.log(saya.age)