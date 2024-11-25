let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

//text areas
let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");
boxNumber.value = "";
changeColor.value = "";
let colorChoice = "";
let boxChoice = "";

changeColor.addEventListener("input", (event) => {
  colorChoice = event.target.value.toLowerCase();
});

boxNumber.addEventListener("input", (event) => {
  boxChoice = event.target.value;
  console.log(boxChoice);
});

changeColorBtn.addEventListener("click", function () {
  if (boxChoice == "1") {
    switch (colorChoice) {
      case "red":
        box1.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box1.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box1.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box1.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box1.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs! Numbers: 1-8/Colors: Red ,Blue ,Purple ,Brown and Yellow");
        break;
    }
  }
  if (boxNumber.value == "2") {
    switch (colorChoice) {
      case "red":
        box2.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box2.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box2.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box2.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box2.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
  if (boxNumber.value == "3") {
    switch (colorChoice) {
      case "red":
        box3.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box3.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box3.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box3.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box3.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
  if (boxNumber.value == "4") {
    switch (colorChoice) {
      case "red":
        box4.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box4.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box4.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box4.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box4.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
  if (boxNumber.value == "5") {
    switch (colorChoice) {
      case "red":
        box5.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box5.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box5.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box5.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box5.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
  if (boxNumber.value == "6") {
    switch (colorChoice) {
      case "red":
        box6.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box6.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box6.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box6.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box6.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
  if (boxNumber.value == "7") {
    switch (colorChoice) {
      case "red":
        box7.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box7.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box7.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box7.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box7.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
  if (boxNumber.value == "8") {
    switch (colorChoice) {
      case "red":
        box8.className = "col-3 text-center boxSize bg-red";
        break;
      case "purple":
        box8.className = "col-3 text-center boxSize bg-purple";
        break;
      case "brown":
        box8.className = "col-3 text-center boxSize bg-brown";
        break;
      case "blue":
        box8.className = "col-3 text-center boxSize bg-blue";
        break;
      case "yellow":
        box8.className = "col-3 text-center boxSize bg-yellow";
        break;
      default:
        alert("Please enter valid inputs!");
        break;
    }
  }
});

resetBtn.addEventListener("click", function () {
  box1.className = "col-3 text-center boxSize bg-trans";
  box2.className = "col-3 text-center boxSize bg-trans";
  box3.className = "col-3 text-center boxSize bg-trans";
  box4.className = "col-3 text-center boxSize bg-trans";
  box5.className = "col-3 text-center boxSize bg-trans";
  box6.className = "col-3 text-center boxSize bg-trans";
  box7.className = "col-3 text-center boxSize bg-trans";
  box8.className = "col-3 text-center boxSize bg-trans";
});
