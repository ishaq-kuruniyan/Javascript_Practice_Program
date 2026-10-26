//node, npm--> node package manager, npx--> node package executer
//call backfunction - A Function have another function as an argument

function displayresult(result) {
    console.log(result)
}
function calculate(a, b, callback) {
    let sum = a + b
    callback(sum)

}
function substract(a, b, c) {
    let sub = b - a
    c(sub)
}

calculate(5, 8, displayresult)
substract(6, 30, displayresult)