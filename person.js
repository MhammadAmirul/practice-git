export class Personn {
    constructor(name = 'John', age = 30) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`hallo, my name is ${this.name}`)
    }
    getName() {
        return this.name
    }
}