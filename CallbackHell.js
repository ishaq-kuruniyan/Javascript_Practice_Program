//callback hell--> pyramid of doom or  loop of function inside another function#
/*function displaydata(cb1) {
    console.log("1 st function executed")
    cb1()
}

function callbackfunctioneone(cb2) {
    console.log("call back function executed")
    cb2()
}
function endfucntion() {
    console.log("function execution stopped")
}
displaydata(function () {
    callbackfunctioneone(function () {
        endfucntion()
    })
})*/
// promise function

const displaydata = () => {

    return new Promise((resolve, reject) => {
        console.log("first functionexxecuted")
        resolve()
    })

}
const callbackfunctioneone = () => {

    return new Promise((resolve, reject) => {
        console.log("call back function executed")
        let pass = false
        if (pass) {
            resolve("completed")
        }
        else {
            reject("not completed")
        }
    })

}
const endfucntion = () => {

    return new Promise((resolve, reject) => {
        console.log("function execution stopped")
        resolve()
    })

}

displaydata().then(() => callbackfunctioneone())
    .then(() => endfucntion())
    .then(() => { console.log("all function executed successfully") })
    .catch((error) => { console.error("the error message is " + error) })    
    
 const paper=()=>{
   return new Promise((resolve) =>{
    resolve("hello asynchronite function")
   })
 }
 const stone=async()=>{
    console.log("function started")
    const sample= await paper()
    console.log(sample)
    console.log("function stop")
 }

stone()
