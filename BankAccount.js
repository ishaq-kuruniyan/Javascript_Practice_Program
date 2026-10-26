class BankAccount {
    #currentbalance //encapsing
    constructor(currentbalance, accountholder) {
        this.#currentbalance = currentbalance
        this.accountholder = accountholder
    }
    deposit(depositamount) {
        this.#currentbalance = this.#currentbalance + depositamount

    }
    withdraw(withdrawamount) {
        this.#currentbalance = this.#currentbalance - withdrawamount

    }
    showbal() {
        console.log("Current Balance: " + this.#currentbalance)

    }
}
const depositobj= new BankAccount(670675,"David")
depositobj.deposit(4500)
depositobj.showbal()
depositobj.withdraw(112789)
depositobj.showbal()


//shoe salary,update sal,dedecy salary