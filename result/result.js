// import { score } from "../qustion/question.js";
//make the name display
const getName = localStorage.getItem('name');
const score = JSON.parse(localStorage.getItem('score')); 
// console.log(getName); 

//display name 
const perName = document.getElementById('person-name');
perName.textContent = getName; 

const total = document.getElementById('score');
if (score >= 5) {
    total.innerHTML = `Congratulations !!!, <span id="person-name">${getName}</span><br>
    You PASSED with total mark of <br>
    <span>${score}/10</span>`
}else if(!score){
    total.innerHTML = `Better luck next time !!!, <span id="person-name">${getName}</span><br>
    You Failed with a total mark of <br>
    <span>0/10</span>`
}else{
    total.innerHTML = `Better luck next time !!!, <span id="person-name">${getName}</span><br>
    You Failed with a total mark of <br>
    <span>${score}/10</span>`
}

//remove score from local storage
const home = document.querySelector('.Go-home');
home.addEventListener('click', ()=>{
    localStorage.removeItem('score');
    localStorage.removeItem("name");
})