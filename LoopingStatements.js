/* for(initialize;condition;updation){
code
}*/

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    console.log("welcome")
}

for (let i = 0; i <= 3; i++) {
    console.log(i)
}
console.log("------")
for (let i = 5; i >= -5; i--) {
    console.log(i)
}
console.log("------")
/* initialize:
while(condtion){
i++
}*/

let count = 0
while (count < 3) {
    console.log(count)
    count++
}

let password = "12345"
let enteredPasword = "2345"

while (enteredPasword != password) {
    console.log("Entered valid password")
    enteredPasword = "12345"
    console.log("logged in")
}
console.log("------")
/* do{}
while(condtion) */

let k = 10
do {
    console.log(k)
    k++
}
while (k < 25)

console.log("------")

let mark = 6
const result = (mark >= 18) ? "pass" : "failed"
console.log(result)