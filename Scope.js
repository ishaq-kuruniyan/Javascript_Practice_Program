if (true) {
    var x = "iam var "
    console.log(x)
}

console.log(x)


function Testvar() {
    var y = "iam var inside function"
    console.log(y)
}
Testvar()

if (true) {
    let a = "iam let inside block"
    console.log(a)
    const b = "iam const inside block"
    console.log(b)

}
// let,const is block and function resist but var is not IN FUNCTION PNLY
//console.log(b)
//console.log(a)

var username = "muhammad"
function Scopetest() {
    console.log(username)
    var userage = 29
    console.log(userage)

    if (true) {
        let usercity = "malappuram"
        var userrole = "manager"
        const country = "India"
        console.log(username)
        console.log(userage)
        console.log(usercity)
        console.log(userrole)
        console.log(country)
    }
    console.log(userrole) // outside block but it is var will print
    //console.log(usercity)  //outside block with let wont print
    //console.log(country)  // outside block with const wont print

}

Scopetest()
console.log(username) //its global will print
//console.log(userage)    //outside function var wont print
//console.log(userrole)  //outside function,block var wont print
//console.log(usercity)  //outside block with let wont print
//console.log(country)   //outside block with const wont print



const k = function () {                    //anonymous function with no name

    console.log("hello from anonymous function")
}

k()

//Arrow function    ()=>{}

const display = function(a,b){
    return a+b
}
console.log(display(30,40))


//arrow function example

const arrow=(x,y)=>{return x+y}
console.log(arrow(87,90))
