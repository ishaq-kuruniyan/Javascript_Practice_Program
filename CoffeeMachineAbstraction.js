class CoffeeMachineAbstract {
    #boiledwater() {
        console.log("heating water")
    }
    #addmilk() {
        console.log("Milk added")
    }
    #addsugar() {
        console.log("sugar added")
    }
    #addcoffeepowder() {
        console.log("Coffe powder added")

    }
    makeyourcoffee() {
        console.log("coffee machine is turned ON")
        this.#boiledwater()
        this.#addsugar()
        this.#addmilk()
        this.#addcoffeepowder()
    }
    makeyourcoffeewithout() {
        console.log("coffee machine is turned on without sugar")
        this.#boiledwater()
        this.#addmilk()
        this.#addcoffeepowder()
    }
}

const mycoffeeobj = new CoffeeMachineAbstract()
mycoffeeobj.makeyourcoffee()
mycoffeeobj.makeyourcoffeewithout()
