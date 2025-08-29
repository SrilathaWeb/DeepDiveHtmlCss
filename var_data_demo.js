let wordData;

wordData="Word List";

console.log(wordData);

let subTotal = 100;
let tax= subTotal* 0.04;
let totalWithTax = tax+subTotal;
console.log(totalWithTax);

let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2:{
        obj2Key1: "Internal Object value",
    }
}
console.log(obj.key1)
console.log(obj.obj2.obj2Key1);

console.log(obj.obj2.boolean);//undefined
//static, dynamic
let emp="hello world ";
console.log(emp);//hello world
emp= 4;
console.log(emp);//4


let var1 = "2"
let var2 = 3;
console.log(var1+var2); // 23

let add = 1+2
let sub = 2-1
let mul =2*4
let division = 4/2;
let mod = 5%2
let string = "string1"+ "string2";
console.log(string);

