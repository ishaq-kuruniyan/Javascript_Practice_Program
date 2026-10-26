const person = {
    name: "ishaq",
    lastname: "muhammad",
    age: 29,
    isEmployed: true,
    // fullname: function () { console.log(this.name + this.lastname) }

}
console.log(person)
//console.log(person.name) dot notation

//console.log(person["age"])  bracket notation
person.city = "malappuram"
console.log(person)
person.name = "ishaq kuruniyan" //update
person.sports = "foootball" // add
console.log(person)
delete person.isEmployed
console.log(person)
//person.fullname()

for (let key in person) {
    console.log(key + ":         " +  person[key])
}
const student = {
    name: "Raju",
    lastname: "sagar",
    age: 29,
    isEmployed: true,
    Greet: function () { console.log("Good Morning " + this.name) }

}
student.Greet()

for (let key in student) {
    if ( student[key] == "function") {
        console.log(key())
    }
    else {
        console.log(key + "; " + student[key])
    }
}