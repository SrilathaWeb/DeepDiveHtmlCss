//objects, interfaces and API's

let dog ={
    name: 'Steve',
    color:"green",
    breed:"Pug",
    size:"medium",
    bark : function(typeOfBark){
        console.log("Bark!" +typeOfBark)
    }
}

dog.bark() // Bark! undefined

dog.bark("boww") // Bark!boww

//rest apis -> interact with other apps

//pass by value
function x(y){
    y.num= y.num+5;
    console.log(y);
}

//let y= 5; // pass by value
let y ={
    name: 'Steve',
    num:10
}
x(y); //objects pass by ref
console.log(y);
