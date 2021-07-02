const getUserChoice=(userInput)=>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
    return userInput;
  } else {
    console.log('wrong input');
  }
}

const getComputerChoice=()=>{
  var choice = Math.floor(Math.random()*3);
  if(choice===0){
    return 'rock';
  } else if(choice===1){
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner=(userChoice, computerChoice)=>{
  if(userChoice===computerChoice){
    return 'the game is tied';
  } else if (userChoice==='bomb'){
    return 'the user cheated and wins';
  }

  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'the computer wins';
    } else {
      return 'the user wins';
    }
  }

  if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'the computer wins';
    } else {
      return 'the user wins';
    }
  }

  if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'the computer wins';
    } else {
      return 'the user wins';
    }
  }
}

const playGame =()=>{
  var userChoice = getUserChoice('bomb');
  var computerChoice = getComputerChoice();
  console.log('User plays: ' + userChoice);
  console.log('Computer plays: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
