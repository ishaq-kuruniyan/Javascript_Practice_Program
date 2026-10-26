try {
    let a = 10
    let b = 0
    if (b === 0) {
        throw new Error("a number cannot be divided by zero")

    }
    let result = a / b
    console.log(result)
}
catch (error) {
    console.log(error.message)
}
finally{
    console.log("execution stopped")
}