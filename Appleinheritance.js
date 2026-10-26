import { Fruitsinheritance } from "./Fruitsinheritance.js"

class Appleinheritance extends Fruitsinheritance {
    constructor(color, taste, varient) {
        // console.log("appl constructor")
        //this.color=color
        // this.taste=taste
        super(color, taste)   //superclass or parent class super must be first
        this.varient = varient
    }
    isSweet() {
        console.log("Apple fuction")
        console.log(this.color)
        console.log(this.taste)
        console.log(this.varient)
    }
}
const apple = new Appleinheritance("red", "sweet", "gala")
apple.isSweet()
apple.isRipe()

const myfruit = new Fruitsinheritance("blue", "crisp")
myfruit.isRipe()
//myfruit.isSweet()