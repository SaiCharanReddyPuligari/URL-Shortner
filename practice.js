//JS is a dynamic language, that is we do not have to explicitly define the data types as INT X = 2; 
// C++ and Java are the static languages
//Primitive DataTypes
let name= 'sai';
let age= '23'; //let age= 30; is also a valid statement.
let myage= 22;
let what = false;
let first= undefined;
let Nvalue= null; //a varible without any value is undifined, and we use null in general to assign value to it.

//Reference DataTypes object, array, and function
let person= { //objects
    x: 'r',
    y: 1
};
//changing values
person.x= 4; //or person['name']= 'reddy';
person.y= 'sai';
person['x']= "ReddySquare";
// console.log(person['x']);
 //arrays
 let nums=[3,2,5,7,12,23];
  nums[6]='key';
//  console.log(nums);
// 
//console.log(y);
 //functions
 //let k= parseFloat(y);
 let wel= function(name1){
    console.log(`hi ${name1}`)
 }
 wel("charan");
 let a=9, b=4;
 let sum = (a,b) =>{
    return a+b+b;
  }
//importing functions from math.js file
//const math = require("./math");
// console.log(math.divFn(a,b));
// console.log(math.subFn(a,b));
// const {div, sub} = require("./math");
const {div} = require("./math");

const arr=[3,4,2,2];

for(var i in arr){
   console.log(arr[i]);
}
//objects

const symbolValues={
   'A':5,
   'B':4,
   'C':3,
   'D':2,
}

//disp values
Object.keys(symbolValues).forEach(
   (i) => {
//  console.log(i);
}
)//A B C D
Object.keys(symbolValues).forEach(
   (i) => {
//  console.log(symbolValues[i]);
}
)//5 4 3 2
//to display only array values
let value= Object.values(symbolValues); //convert the object to array
console.log(value); //[5,4,3,2]
for (i in value){
   console.log(value[i]);
}
let entry= Object.entries(symbolValues); //convert each entry into an array
// console.log(entry); 
// 0: {2} [A, 2]
// 1: {2} [B, 3]
// 2: {2} [C, 4]
// 3: {2} [D, 5]
// console.log(div(a,b));
// console.log(sub(a,b));
//accessing values of a array inside an array
// for(const row of transpose){ here row is a array in transpose
//    let rowString="";
//    for (const[i, symbol] of row.entries()){ 

//        rowString+= symbol;

//        if(i!=row.length-1){
//           rowString+= " | "
//        }
//    }
//    console.log(rowString);
//  }