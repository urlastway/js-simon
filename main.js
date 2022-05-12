var pc__number = document.getElementById("pc__number")
var pc__numbers = [];
var user__numbers = [];
var numbers__hiddens = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

while (pc__numbers.length <= 4 ) {
    const pcGenerateNumber = getRndInteger(1, 100);
    pc__numbers.push(pcGenerateNumber);
  };

pc__number.innerHTML = pc__numbers;


setTimeout(Timingout, 3000);
function Timingout () {
    document.getElementById("pc__number").style.display = "none";
    while(user__numbers.length <= 4){
        user__numbers.push(Number(prompt("Inserisci il numero")));
    };
    console.log(user__numbers);
};

for(let i = 0; i <= 4; i++){
    if(user__numbers[i] == pc__numbers[i]){
        numbers__hiddens.push(user__numbers[i]);      
    }
};



