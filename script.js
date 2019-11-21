//set current user on page load
const player1 = {
  name: "Player 1",
  symbol: "O"
};
const player2 = {
  name: "Player 2",
  symbol: "X"
};

let setCurrentUser = (player) => {
  let currentUser = player;
  return currentUser;
};

let userDiv = document.querySelector(".current-user");
let theUser = document.createElement("span");

document.addEventListener("DOMContentLoaded", () => {
  let currentUser = setCurrentUser(player1);
  theUser.innerText = currentUser.name;
  userDiv.appendChild(theUser);
});

//get current user: 
let theCurrentUser = () => {
  console.log(theUser);
  if(theUser.innerText === player1.name){
    return player1;
  } else {
    return player2;
  }
}

const userChange = () => {
  userDiv.innerText = "";
  if(theUser.innerText === player1.name){
    let currentUser = setCurrentUser(player2);
    theUser.innerText = "";
    theUser.innerText = currentUser.name;
  } else {
    let currentUser = setCurrentUser(player1);
    theUser.innerText = "";
    theUser.innerText = currentUser.name;
  }
  userDiv.appendChild(theUser);
}

//grab the squares
let oneOne = document.querySelector(".one-one");
let oneTwo = document.querySelector(".one-two");
let oneThree = document.querySelector(".one-three");

let twoOne = document.querySelector(".two-one");
let twoTwo = document.querySelector(".two-two");
let twoThree = document.querySelector(".two-three");

let threeOne = document.querySelector(".three-one");
let threeTwo = document.querySelector(".three-two");
let threeThree = document.querySelector(".three-three");

let clearBoard = () => {
  oneOne.innerHTML = "";
  oneTwo.innerHTML = "";
  oneThree.innerHTML = "";

  twoOne.innerHTML = "";
  twoTwo.innerHTML = "";
  twoThree.innerHTML = "";

  threeOne.innerHTML = "";
  threeTwo.innerHTML = "";
  threeThree.innerHTML = "";

  theUser.innerText = player1.name;
};

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", (event) => {
  clearBoard()
});

//create the O or X
let createOX = () => {
  if (theUser.innerText === player1.name) {
    let circle = document.createElement("p");
    circle.innerHTML = "O";
    return circle;
  } else if (theUser.innerText === player2.name) {
    let theX = document.createElement("p");
    theX.innerHTML = "X";
    return theX;
  }
}

//past winners feature
let pastWinners = [];
let ranking = document.querySelector(".past-winners");

let reloadWinners = (pastWinners) => {
  ranking.innerText = "";
  let aTitle = document.createElement("p");
  aTitle.classList.add("classList")
  aTitle.innerText = "past winners";
  ranking.appendChild(aTitle);

  pastWinners.forEach((item) => {
    let aWinner = document.createElement("p");
    aWinner.innerText = item.name
    ranking.appendChild(aWinner);
    // debugger;
  });
}

//event listeners for moves
let theListener = (theSquare) => {
  theSquare.addEventListener("click", (event) => {
    //creates an X or O based on current user
    let argument = createOX();
    // debugger
    if (theSquare.childElementCount < 1){
      theSquare.appendChild(argument);
      userChange();
    }
    
    //below code checks win conditions
    //gets 3 top row
    let win1 = oneOne.innerText
    let win12 = oneTwo.innerText
    let win13 = oneThree.innerText
    //gets 3 mid row
    let win2 = twoOne.innerText
    let win22 = twoTwo.innerText
    let win23 = twoThree.innerText
    //gets 3 bottom row
    let win3 = threeOne.innerText
    let win32 = threeTwo.innerText
    let win33 = threeThree.innerText

    //gets 3 first column
    let col1 = win1
    let col12 = win2
    let col13 = win3
    //gets 3 2nd column
    let col2 = win12
    let col22 = win22
    let col23 = win32
    //gets 3 3rd column
    let col3 = win13
    let col32 = win23
    let col33 = win33

    //gets 3 diagonally left-to-right
    let dia1 = win1
    let dia2 = win22
    let dia3 = win33
    //right-to-left
    let dia4 = win13
    let dia5 = win22
    let dia6 = win3
    
    let checkWin = () => {
      //rows:
      if(win1 === "O" & win12 === "O" & win13 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(win1 === "X" & win12 === "X" & win13 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      } else if(win2 === "O" & win22 === "O" & win23 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(win2 === "X" & win22 === "X" & win23 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      } else if(win3 === "O" & win32 === "O" & win33 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(win3 === "X" & win32 === "X" & win33 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      }
      //columns: 
      if(col1 === "O" & col12 === "O" & col13 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(col1 === "X" & col12 === "X" & col13 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      } else if(col2 === "O" & col22 === "O" & col23 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(col2 === "X" & col22 === "X" & col23 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      } else if(col3 === "O" & col32 === "O" & col33 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(col3 === "X" & col32 === "X" & col33 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      } 
      //diagonal: 
      if(dia1 === "O" & dia2 === "O" & dia3 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(dia1 === "X" & dia2 === "X" & dia3 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      } else if(dia4 === "O" & dia5 === "O" & dia6 === "O"){
        alert("Player One Wins!");
        pastWinners.push(player1);
        reloadWinners(pastWinners);
      } else if(dia4 === "X" & dia5 === "X" & dia6 === "X"){
        alert("Player Two Wins!");
        pastWinners.push(player2);
        reloadWinners(pastWinners);
      }
    }
    checkWin();
  })
};

//top row
theListener(oneOne);
theListener(oneTwo);
theListener(oneThree);
//second row
theListener(twoOne);
theListener(twoTwo);
theListener(twoThree);
//third row
theListener(threeOne);
theListener(threeTwo);
theListener(threeThree);