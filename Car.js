class Car {

    constructor(color, branch) {
        console.log("constructor calling")
        this.color = color
        this.branch = branch

    }
    Drive() {
        console.log(("Drive a car"))
    }
    start() {
        console.log("Start a car")
    }
    display() {
        console.log(this.branch)
        console.log(this.color)

    }
}

const carobj = new Car("red", "kochi") //constructor function is called when object is created
carobj.Drive()
carobj.start()
carobj.display()
const carobj1 = new car("black","aluva")
carobj1.display()
