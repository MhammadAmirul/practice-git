class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`${this.name} make a noise.`)
    }
}

export class Bird extends Animal {
    constructor(color, name) {
        super(name)
        this.color = color
    }
    speak() {
        console.log(`${this.name} chirps.`)
    }
}

// const tweety = new Bird('Tweety')
// tweety.speak() // Tweety make a sound