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
    if (colorChoice == "red") {
      box1.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box1.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box1.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box1.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box1.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "2") {
    if (colorChoice == "red") {
      box2.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box2.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box2.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box2.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box2.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "3") {
    if (colorChoice == "red") {
      box3.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box3.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box3.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box3.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box3.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "3") {
    if (colorChoice == "red") {
      box3.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box3.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box3.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box3.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box3.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "4") {
    if (colorChoice == "red") {
      box4.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box4.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box4.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box4.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box4.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "5") {
    if (colorChoice == "red") {
      box5.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box5.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box5.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box5.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box5.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "6") {
    if (colorChoice == "red") {
      box6.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box6.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box6.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box6.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box6.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "7") {
    if (colorChoice == "red") {
      box7.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box7.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box7.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box7.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box7.className = "col-3 text-center boxSize bg-yellow";
    }
  }
  if (boxNumber.value == "8") {
    if (colorChoice == "red") {
      box8.className = "col-3 text-center boxSize bg-red";
    }
    if (colorChoice == "purple") {
      box8.className = "col-3 text-center boxSize bg-purple";
    }
    if (colorChoice == "brown") {
      box8.className = "col-3 text-center boxSize bg-brown";
    }
    if (colorChoice == "blue") {
      box8.className = "col-3 text-center boxSize bg-blue";
    }
    if (colorChoice == "yellow") {
      box8.className = "col-3 text-center boxSize bg-yellow";
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
