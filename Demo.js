"use strict";
//typescript is superset of javascript
let age = 29;
let type = true;
let c = "test datalet ";
let num = 20;
//num = "twenty" type coversion not possible in typescript
num = 24;
function add(a, b) {
    console.log(a + b);
}
add(67, 89);
function sub(c, d) {
    return c - d;
}
console.log(sub(65, 42));
function displaydetails(price, brand) {
    console.log(brand);
    console.log(price);
}
displaydetails(345, "nike");
let mark = [23, 45, 12, 67]; //array declartion
mark.push(69);
//  mark.push("raju",69)  only samedatatype array possible
console.log(mark);
let user = {
    name: "habeeb", age: 29, city: "kochi"
};
console.log(user);
