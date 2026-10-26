export class Payment{
    constructor(pay){
        this.pay=pay
    }
    getpayment(){
        console.log("payment is done  via  from payment class via "+ this.pay )
    }
}