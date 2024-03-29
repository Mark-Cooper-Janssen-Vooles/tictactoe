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

//create option buttons
let selectionDiv = document.querySelector(".selection1");
let welcomeMessage = document.createElement("p");
welcomeMessage.innerHTML = "<p>Welcome to Tic Tac Toe.</p> <p>Please select an option below to begin.</p>";

let vsPlayer = document.createElement("button");
vsPlayer.innerText = "vsPlayer";

let vsComputer = document.createElement("button");
vsComputer.innerText = "vsComputer";

let optionButtons = () => {
  //this function loads the buttons:
  //create buttons to set vs player or computer:
  selectionDiv.appendChild(welcomeMessage);
  //button to vsPlayer
  selectionDiv.appendChild(vsPlayer);
  //button to vsComputer
  selectionDiv.appendChild(vsComputer);
}
//create option buttons on page load
optionButtons();

vsPlayer.addEventListener("click", (event) => {
  let player1cust = prompt("What is player 1's name?");
  let player2cust = prompt("What is player 2's name?");

  if(player1cust == ""){
    //set default values if empty
    player1cust = "Player 1";
  }
  if(player2cust == ""){
    player2cust = "Player 2";
  }

  player1.name = player1cust;
  player2.name = player2cust;

  // //clear buttons once selection is made.
  let selectionDiv = document.querySelector(".selection1");
  selectionDiv.innerHTML = "";

  // //also now need to load whoose turn it is: 
  theUser.innerText = player1.name;
  userDiv.appendChild(theUser);

  let theCover = document.querySelector(".actual-cover");
  theCover.classList.remove("actual-cover");

  return player1.name = player1cust, player2.name = player2cust;
});

vsComputer.addEventListener("click", (event) => {
  alert("We are still working on the ethics of AI.")
});

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

  //swaps who goes first after every round.
  if(theUser.innerText === player1.name){
    theUser.innerText = player1.name;
  } else if (theUser.innerText === player2.name){
    theUser.innerText = player2.name;
  }
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
//need to declare this outside of if block (todo with scope!);
let pastWinners;

if (localStorage.getItem("pastWinnersHistory") === null) {
  pastWinners = [];
} else {
  pastWinners = JSON.parse(localStorage["pastWinnersHistory"]);
}

//check a new winner is added, add them to the database. 
let saveData = (pastWinners) => {
  localStorage["pastWinnersHistory"] = JSON.stringify(pastWinners);
}

let ranking = document.querySelector(".past-winners");
ranking.classList.add("past-winners");

let reloadWinners = (pastWinners) => {
  ranking.innerText = "";
  pastWinners.forEach((item) => {
    let aWinner = document.createElement("p");
    aWinner.innerText = item.name
    ranking.appendChild(aWinner);
    // debugger;
  });
}
//show past winners on page load:
reloadWinners(pastWinners);

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
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(win1 === "X" & win12 === "X" & win13 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      } else if(win2 === "O" & win22 === "O" & win23 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(win2 === "X" & win22 === "X" & win23 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      } else if(win3 === "O" & win32 === "O" & win33 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(win3 === "X" & win32 === "X" & win33 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      }
      //columns: 
      if(col1 === "O" & col12 === "O" & col13 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(col1 === "X" & col12 === "X" & col13 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      } else if(col2 === "O" & col22 === "O" & col23 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(col2 === "X" & col22 === "X" & col23 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      } else if(col3 === "O" & col32 === "O" & col33 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(col3 === "X" & col32 === "X" & col33 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      } 
      //diagonal: 
      if(dia1 === "O" & dia2 === "O" & dia3 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(dia1 === "X" & dia2 === "X" & dia3 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      } else if(dia4 === "O" & dia5 === "O" & dia6 === "O"){
        alert(`${player1.name} Wins!`);
        pastWinners.push(player1);
      } else if(dia4 === "X" & dia5 === "X" & dia6 === "X"){
        alert(`${player2.name} Wins!`);
        pastWinners.push(player2);
      }
      saveData(pastWinners);
      reloadWinners(pastWinners);
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

let calculateWinners = (pastWinners) => {
  //converts to objects with count based on how many times the name appears
  let finalArray = pastWinners.reduce((accum, curr) => {
    accum[curr.name] = (accum[curr.name] || 0) + 1
    return accum;
  }, {});
  //converts back to array
  let sortThis = [];
  for (person in finalArray){
    sortThis.push([person, finalArray[person]]);
  }
  //orders array
  let sorted = sortThis.sort((a, b) => {
    if(a[1] < b[1]){
      return 1;
    } else if (a[1] > b[1] ){
      return -1;
    } else if (a[1] === b[1]){
      return 0;
    }
  })
  sorted.forEach((item) => {
    //append to the dom
    let aWinner = document.createElement("p");
    aWinner.innerText = `${item[0]}: ${item[1]}`
    ranking.appendChild(aWinner);
  });
}

let checkLeaders = document.querySelector(".classList");
checkLeaders.addEventListener("click", (event) => {
  //toggles between past winners display and leader board display.
  if(ranking.classList[0] === "past-winners"){
    ranking.innerHTML = "";
    ranking.classList.remove("past-winners")
    ranking.classList.add("leader-board")
    calculateWinners(pastWinners);
  } else if (ranking.classList[0] === "leader-board"){
    ranking.innerHTML = "";
    ranking.classList.remove("leader-board")
    ranking.classList.add("past-winners")
    reloadWinners(pastWinners);
  }
});