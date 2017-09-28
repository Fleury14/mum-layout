//jshint esversion: 6

let p1Score = 0;
let p2Score = 0;
const p1Input=document.getElementById('p1-input');
const p2Input=document.getElementById('p2-input');
const middleInput=document.getElementById('middle-input');


function p1Increase() {

    p1Score++;
    document.querySelector('.p1-score').innerHTML = p1Score;
 
}// end playerIncrease()

function p2Increase() {
    p2Score++;
    document.querySelector('.p2-score').innerHTML = p2Score;
}

function p1Decrease() {
    p1Score--;
    document.querySelector('.p1-score').innerHTML = p1Score;
}

function p2Decrease() {
    p2Score--;
    document.querySelector('.p2-score').innerHTML = p2Score;
}

function p1Reset() {
    p1Score=0;
    document.querySelector('.p1-score').innerHTML = p1Score;
}

function p2Reset() {
    p2Score=0;
    document.querySelector('.p2-score').innerHTML = p2Score;
}

function p1NameChange() {
    document.querySelector('.p1-name').innerText = p1Input.value;
}

function p2NameChange() {
    document.querySelector('.p2-name').innerText = p2Input.value;
}

function middleChange() {
    document.querySelector('.center-box').innerText = middleInput.value;
}

document.getElementById('p1inc').addEventListener('click', p1Increase);
document.getElementById('p1dec').addEventListener('click', p1Decrease);
document.getElementById('p1reset').addEventListener('click', p1Reset);
document.getElementById('p2inc').addEventListener('click', p2Increase);
document.getElementById('p2dec').addEventListener('click', p2Decrease);
document.getElementById('p2reset').addEventListener('click', p2Reset);

document.getElementById('p1-submit').addEventListener('click', p1NameChange);
document.getElementById('p2-submit').addEventListener('click', p2NameChange);
document.getElementById('middle-submit').addEventListener('click', middleChange);