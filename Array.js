let fruits = ["apple", "orange", "mango"]
console.log(fruits)
console.log(fruits[1])
console.log(fruits.length)
fruits.push("banana")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("grape") // add elements to fisrt column
console.log(fruits)
fruits.shift() // remove element from first column
console.log(fruits)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.log("Looping array using for of") //same as for loop simple
for (let fruit of fruits) {  //same as for loop simple
    console.log(fruit)
}
console.log(fruits.includes("banana")) // check element
console.log(fruits.indexOf("mango"))
fruits.push("banana", "guava", "watermelon")
console.log(fruits)
let slicedArray = fruits.slice(1, 5) //
console.log(slicedArray)

//splice(start,deleteCount,newitem)
console.log(fruits)
fruits.splice(1, 0, "kiwi")
console.log(fruits)
fruits.splice(1, 5, "pineapple", "strawberry")
console.log(fruits)
let vegtables = ["tomato", "cucumber", "carrot"]
let newarray = fruits.concat(vegtables)
console.log(newarray)
let n = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < n.length; i++) {
    //sum = sum + n[i] 
    sum += n[i]
}
console.log(sum)
const SumArray = n.reduce((total, value) => total + value, 100)//(total=sum above and value=n[i])
console.log(SumArray)

//filter method
let EvenArray = []
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        EvenArray.push(n[i])
    }
}
console.log(EvenArray)
const filterarray = n.filter((value, index) => value % 2 == 0)
console.log(filterarray)

const mapArray = n.map((value) => value * 2)  //map method
console.log(mapArray)

const newfilter = n.filter((value) => value % 2 != 0).map((value) => value * 5).reduce((s, v) => s + v)
console.log(newfilter)

/*map() creates a new array by applying a function to each element.
filter() returns a new array containing only elements that meet a condition.
reduce() combines all elements into a single value (like a sum or object)*/