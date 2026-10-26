import { EmpPoly } from "./EmpPoly.js"

class TrainerPoly extends EmpPoly{
    
    constructor(name){
        super()
        this.name=name
    }
    getrole(){
        console.log(this.name+ " is a software trainer")
        //console.log(`this.name`)
    }
}
const newtrainerpoly= new TrainerPoly("malik")
newtrainerpoly.getrole()
const newemp= new EmpPoly("anas")
newemp.getrole()
// 3 paymen googlepay phonepe payment
