//if(condition){
//code excute
//}

let age = 1
if (age > 19) {
    console.log("you are eligible")
}
else {
    console.log("you are not eligible")
}

/*if(condition1){
}
else if(condition2){
}
else{
 }*/

if (age < 12) {
    console.log("you are not eligible you are too young")
}

else if (age > 50) {
    console.log("you are not elginle you are above 50")
}
else {
    console.log("you are eligible")
}

/* switch(expression)
{
case 1:

case 2:


case n:


default :
}*/

let day = 4
switch (day) {

    case 1:
        console.log("today is sunday")
        break
    case 2:
        console.log("today is monday")
        break
    case 3:
        console.log("today is tuesday")
        break
    case 4:
        console.log("today is wednesday")
        break
    case 5:
        console.log("today is thursday")
        break
    case 6:
        console.log("today is friday")
        break
    case 7:
        console.log("today is saturday")
        break

    default:
        console.log("invalid day")
}


let letter = "z"
switch (letter) {

    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        console.log("letter is vowel")
        break


    default:
        console.log("letter is not vowel")
}

