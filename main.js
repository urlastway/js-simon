const pc__number = document.getElementById("pc__number")
const user__number = document.getElementById("user__number")
const numbers__guessed = document.getElementById("numbers__guessed")

var pc__numbers = [];
var user__numbers = [];
var numbers__hiddens = [];
let i = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

while (pc__numbers.length <= 4 ) {
    const pcGenerateNumber = getRndInteger(1, 100);
    pc__numbers.push(pcGenerateNumber);
  };

pc__number.innerHTML = pc__numbers;


setTimeout(Timingout, 30000);
function Timingout () {
    document.getElementById("pc__number").style.display = "none";
    while(user__numbers.length <= 4){
        user__numbers.push(Number(prompt("Inserisci il numero")));
        if(user__numbers[i] == pc__numbers[i]){
            numbers__hiddens.push(user__numbers[i]);
        };
        i += 1;
    };
user__number.innerHTML = numbers__hiddens;
numbers__guessed.innerHTML = numbers__hiddens.length; 
};



