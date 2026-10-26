//typescript is superset of javascript
let age: number = 29
let type: boolean = true
let c: string = "test datalet "
let num: number = 20
//num = "twenty" type coversion not possible in typescript
num= 24
function add(a:number,b:number){
    console.log(a+b)
}
add(67,89)
function sub(c:number,d:number):number{
    return c-d
}
console.log(sub(65,42))

function displaydetails(price:number,brand:string){
  console.log(brand)
  console.log(price) 
}
displaydetails(345,"nike")

let mark:number[]= [23,45,12,67] //array declartion
mark.push(69) 
//  mark.push("raju",69)  only samedatatype array possible
console.log(mark)

let user:{name:string,age:number,city:string} ={
          name:"habeeb",age:29,city:"kochi"}
          console.log(user)

