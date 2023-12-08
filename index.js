import { Personn } from './person.js'
const john = new Personn ('John', 37)
john.greet()

const yan = new Personn ('yan', 20)
console.log(yan.greet)
yan.greet()

import { Bird } from './inheritance.js'
const bird = new Bird ('red','dikasi')
bird.speak()
console.log('halo')