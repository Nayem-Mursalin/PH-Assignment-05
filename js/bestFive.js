let selectedPlayer = [];
//Button 1
const handleButton1 = (e) => {
    e.target.disabled = true;
    selectedPlayer.push(title1.innerText);
    if (selectedPlayer.length < 6) {
        player1();
    } else {
        alert("Sorry not more than 5");
    }
};

// Button2
const handleButton2 = (e) => {
    e.target.disabled = true;
    selectedPlayer.push(title2.innerText);
    if (selectedPlayer.length < 6) {
        player2();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button3
const handleButton3 = (e) => {
    e.target.disabled = true;
    selectedPlayer.push(title3.innerText);
    if (selectedPlayer.length < 6) {
        player3();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button4
const handleButton4 = (e) => {
    e.target.disabled = true;
    selectedPlayer.push(title4.innerText);
    if (selectedPlayer.length < 6) {
        player4();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button5
const handleButton5 = (e) => {
    e.target.disabled = true;
    selectedPlayer.push(title5.innerText);
    if (selectedPlayer.length < 6) {
        player5();
    } else {
        alert("Sorry Not More Than 5");
    }
};

// Button6
const handleButton6 = (e) => {
    e.target.disabled = true;
    selectedPlayer.push(title6.innerText);
    if (selectedPlayer.length < 6) {
        player6();
    } else {
        alert("Sorry Not More Than 5");
    }
};

//button variable

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");

//title variable 
let title1 = document.getElementById("player1");
let title2 = document.getElementById("player2");
let title3 = document.getElementById("player3");
let title4 = document.getElementById("player4");
let title5 = document.getElementById("player5");
let title6 = document.getElementById("player6");

let listParent = document.getElementById("playerlist");


// Button Event Listener
button1.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);
button3.addEventListener("click", handleButton3);
button4.addEventListener("click", handleButton4);
button5.addEventListener("click", handleButton5);
button6.addEventListener("click", handleButton6);



// Setting Title To Cart
const player1 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title1.innerText}`;
    listParent.appendChild(list);
};

const player2 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title2.innerText}`;
    listParent.appendChild(list);
};
const player3 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title3.innerText}`;
    listParent.appendChild(list);
};
const player4 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title4.innerText}`;
    listParent.appendChild(list);
};
const player5 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title5.innerText}`;
    listParent.appendChild(list);
};
const player6 = () => {
    const list = document.createElement("li");
    list.innerHTML = `${title6.innerText}`;
    listParent.appendChild(list);
};


// Upper Part End
// calculation part


const hCalculate = () => {
    const playerCost = perPlayer.value * selectedPlayer.length;
    playerExpense.innerText = playerCost;
};

const hCalculateTotal = () => {
  
    const playerCost = perPlayer.value * selectedPlayer.length;
    hCalculate();
    const total =
        playerCost + parseInt(managerCost.value) + parseInt(coachCost.value);
    finalTotal.innerText = total;
};


// Getting Input Data
let perPlayer = document.getElementById("perPlayer");
let playerExpense = document.getElementById("playerExpense");
let managerCost = document.getElementById("managerCost");

let coachCost = document.getElementById("coachCost");

let finalTotal = document.getElementById("finalTotal");



// Getting Button Data
let calculatePlayer = document.getElementById("calculatePlayer");
let calculateTotal = document.getElementById("calculateTotal");

// Button Event Listener
calculatePlayer.addEventListener("click", hCalculate);
calculateTotal.addEventListener("click", hCalculateTotal);
