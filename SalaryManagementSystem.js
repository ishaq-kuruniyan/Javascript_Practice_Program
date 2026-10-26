class SalaryManagementSystem {

    #salary //encapsing
    constructor(salary, empname) {
        this.#salary = salary
        this.empname = empname
    }
    updatesal(updatedsalary) {
        this.#salary = this.#salary + updatedsalary

    }
    deduct(deductamt) {
        this.#salary = this.#salary - deductamt

    }
    showsal() {
        console.log("salary after deduction: " + this.#salary)

    }
}
const depositobj = new SalaryManagementSystem(670675, "David")
depositobj.updatesal(4500)
depositobj.showsal()
depositobj.deduct(112789)
depositobj.showsal()


//shoe salary,update sal,dedecy salary
