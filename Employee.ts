class Employee{
    name:string
    id:string
    salary:number
    constructor(name:string,id:string,salary:number){
        this.name=name
        this.id=id
        this.salary=salary
    }
    getdetails(){
        return this.name
    }

}
const emp1= new Employee("Rohit","345",45000)
console.log(emp1.getdetails())
