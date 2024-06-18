"use strict";

const containerEl=document.querySelector('.container');
const btnPlayEl=document.querySelector('.btn_again');
const btnChkEl= document.querySelector('.btn_check');
const hide_numEl= document.querySelector('.hide_num');
const msgEl= document.querySelector('.message');
const inputNumEl= document.querySelector('.input_number');
const highScoreEl= document.querySelector('.high_score');
const scoreEl= document.querySelector('.score');


// generate random number from 1 to 20;
let secretNum= Math.trunc(Math.random()* 20 +1);
let score= 20;
let highScore=0;

// grant to check the hidden number
btnChkEl.addEventListener('click',()=>{
 const guess=Numbeer(inputNumEl.value);

 //check empty input
 if(guess){

//not match hide number
if(guess != secretNum){
  if(score > 1){
 score--;
scoreEl.textContent=score;
msgEl.textContent=guess>secretNum? "Too High": "Too Low";
}else{
msgEl.textContent="You have lossed the game";
scoreEl.textContent=0;
}
}else{//success
hide_numEl.textContent=secretNum;
}
}else{
 msgEl.textContent = "Please Enter The Number:(";
 }


 });
