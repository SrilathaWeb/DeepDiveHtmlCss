//conditions, functions, scope and loops

let eq = 1=="1"
console.log(eq) //true

let eq1 = 1 === "1"
console.log(eq1) // false

//equals
let equals = 1===1 // comparator for equals. compare types and values

//greater than
let greater = 2>1;
//less than
let less = 3 <10;
//greater than or equal
let greaterThanOrEquals = 3 >=3
//less than or equal
let lessThanOrEquals = 4 <=9
//not equal
let notEquals = 5 !== 10;

let storeA = 1.40;
let storeB = 4.40;

let storeIsLower = storeA < storeB;

if (storeIsLower) { //condition check
 console.log("Store A has lower price");
} else if (storeB<storeA){
    console.log("Store B has lower price");
} else{
    console.log("Their prices are equal.");
}
//functions are reusable code

function compareStorePrices(storeA, storeB) {

    if (storeA<storeB) { //condition check
        console.log("Store A has lower price");
    } else if (storeB<storeA){
        console.log("Store B has lower price");
    } else{
        console.log("Their prices are equal.");
    }

}
compareStorePrices(10,5)
compareStorePrices(7,10)

function squareNum(num){
    return num*num
}

let square = squareNum(5);
console.log(square)

//scopes
//3 level scopes
//global scope, block scopes, condition scopes

let x= 10
function addNumber(a,b) {
    console.log(x) // global value
    return a + b; //inside,block scope
}

//console.log(n)//error n not defined. not accessible here
console.log(addNumber(4,5))

//arrays
let ourArray =[1,2,3,4,5,6, ['a','b','c']]; // starts at 0 index
console.log(ourArray)
console.log(ourArray[0])
console.log(ourArray[6][1])

//loop , until come condition are meet

for(let i=0; i<ourArray.length; i++){ //counter, comparator, increment
console.log("i equal to: "+ourArray[i])
}

//while
let x1= 0
while(x1<10){
    console.log("ram")
    x1=x1+1;
}




