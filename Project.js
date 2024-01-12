//Deposit the amount
//determine the no of line to bet on
//collect the bet amount
//spin the slot machine
const prompt= require('prompt-sync')();

//variables to be used in the program

const rows=3;
const cols=3;

const symbolCount={
    'A':2,
    'B':4,
    'C':6,
    'D':8,
}

const symbolValues={
    'A':5,
    'B':4,
    'C':3,
    'D':2,
}

deposit = () =>{
while(true){
   let dAmount= prompt("enter the deposit money: ");
   let nDepositAmount= parseFloat(dAmount);
    if (nDepositAmount<=0 || isNaN(nDepositAmount )){
        console.log("enter a valid amount, try again");
    }
    else{
       return nDepositAmount;
    }
}
} 

linesToBetOn= () =>{
     while(true){
        let nLines= prompt("enter the number of lines you want to bet: ");
        let nOfLines= parseFloat(nLines);
         if (nOfLines<=0 || isNaN(nOfLines) || nOfLines>3){
             console.log("Available lines are 3, enter the lines between them");
         }
         else{
            return nOfLines;
         }
      }
}

const getBet= (balance, lines) =>{
    while(true){
       let betAmount= prompt("enter the bet you want to place per line: ");
       let betNum= parseFloat(betAmount);
        if (betNum<=0 || isNaN(betNum) || betNum> balance/lines ){
            console.log("Invalid bet, try again");
        }
        else{
           return betNum;
        }
     }
}
const spin=()=>{
    const allPossible=[];
    for ([symbol, count] of Object.entries(symbolCount)){
    for (let i=0;i <count;i++){
        allPossible.push(symbol);
    }
    }
//spinnig the reels
const reels=[];
for (let i=0; i < cols; i++){
    reels.push([]);
    const reel= [...allPossible]; //same as allPossible
    for (let j=0; j< rows; j++){
    const index= Math.floor(Math.random()*reel.length);  //generate a random number between 0 and 1 and fllor it
    const selectSymbol= reel[index];
    reels[i].push(selectSymbol); //push it into ith reel
    reel.splice(index,1); //remove only "1" element it from the reel
    }
}
return reels;

}
const tpMatrix=(reels)=>{
//after the spin the answer is 
// [ [ 'D', 'D', 'B' ], [ 'A', 'D', 'C' ], [ 'D', 'A', 'D' ] ]
//we have to check the elemets of the first row like
// D | A | D
// D | D | A
// B | C | D //to achive this we have to transpose the matrix
    const tMatrix=[];
    for (let i=0; i<rows; i++){
       tMatrix.push([]);
       for (let j=0; j<cols; j++){
         tMatrix[i].push(reels[j][i]); //transpose
       }
    }
return tMatrix;
}
const printRows=(transpose)=>{

  for(const row of transpose){
    let rowString="";
    //the row we have is ["A", "B", "C"]
    for (const [i,symbol] of row.entries()){
    // const [i, symbol] gives us 0-> A, 1->B, 2->C
        rowString+= symbol;

        if(i!=row.length-1){
           rowString+= " | "
        }
    }
    console.log(rowString);
  }

}

const getWinAmount=(transpose, bet, lines)=>{

    let Winnings= 0;

    for(let row=0; row<lines; row++){

     const symbols=transpose[row]; //taking the first row

     let allSame= true;
      for (const symbol of symbols){
        if(symbol!= symbols[0]){
            allSame= false;
            break;
        
      }
    }
    if (allSame){ 
     Winnings += bet * symbolValues[symbols[0]];
    }
    
 return Winnings;
}
}
const Game=()=>{
let balance= deposit(); //depsit amount
while(true){

console.log("your avaiable balance is "+ balance);
const lines = linesToBetOn(); //Lines to Ben On
const bet = getBet(balance, lines);
balance-= bet*lines;
const reels= spin();
const transpose= tpMatrix(reels);
const printR= printRows(transpose);
const Winnings=getWinAmount(transpose, bet, lines);
balance+= Winnings;
console.log("$"+ Winnings.toString());

if ( balance<= 0){
    console.log("you ran out of money");
    break;
}
const playagain= prompt("Do you want to play again? (y/n) ");
if (playagain!= "y") break;
}
}
Game();