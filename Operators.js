// +,-,*,/,%** Arithmetic Operators
let a = 2
let b = 3
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

//=,+=,-=,*=,/=    - Assignment Operators
let x = 10
//x=x+5
x += 5
console.log(x)
x -= 5
console.log(x)
x *= 5
console.log(x)
x /= 5
console.log(x)

// ==,===,!=,!==,>,<,>=,<=    comparison/Relational Operators

let d = 13
let e = 14
console.log(d == e)
let f = "14"
console.log(e == f) // true check value only
console.log(e === f) // false check type and value
console.log(f != e)
console.log(f !== e)
console.log(d > e)
console.log(d < e)
console.log(e >= f)

//&&,||,!  Logical or conditional  Operators
let age = 22
let hasLicense = true
let canDrive = (age >= 18) && hasLicense
console.log("Can I drive? " + canDrive)
console.log(e + f)
let age2 = 16
let hasLicense2 = false
let canDrive2 = (age2 >= 18) || hasLicense
console.log("Can I drive?", canDrive2)
console.log(!hasLicense2)