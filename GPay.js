import { Payment } from "./Payment.js"
import { Phonepe } from "./Phonepe.js"

class GPay extends Phonepe {
    constructor(pay) {
        super()
        this.pay = pay
    }
    getpayment() {
        console.log("payment  done using gpay " + this.pay)
    }
}

const newpayment1 = new Payment("gpay 98 rupes")
newpayment1.getpayment()
const newgpay = new GPay(" 188 rupes")
newgpay.getpayment()
const newphonepe = new Phonepe("34 rupees")
newphonepe.getpayment()
const newpayment = new Payment("phonepe 496 rupes")
newpayment.getpayment()