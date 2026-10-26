import { Payment } from "./Payment.js"

export class Phonepe extends Payment {
    constructor(pay) {
        super()
        this.pay = pay
    }
    getpayment() {
        console.log("payment  done using phonepe " + this.pay)
    }
}
