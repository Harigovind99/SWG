let characters = 'SWG';
let charactersLength = characters.length;
let p = 0;
let c = 0;
let chances = 0;
alert("Welcome to \"Snake Water Gun\" Game...In this game computer will choose Snake, Water or Gun. There are 10 rounds");
do {
  let result = characters.charAt(Math.floor(Math.random() *
    charactersLength));
  let userinput = prompt("Enter S for Snake, W for Water and G for Gun:-");
  if (userinput == result) {
    p++;
    c++;
    alert("Tied...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else if (userinput == 'S' && result == 'W') {
    p++;
    alert("You won...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else if (userinput == 'G' && result == 'W') {
    c++;
    alert("Computer won...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else if (userinput == 'W' && result == 'S') {
    c++;
    alert("Computer won...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else if (userinput == 'W' && result == 'G') {
    p++;
    alert("You won...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else if (userinput == 'S' && result == 'G') {
    c++;
    alert("Computer won...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else if (userinput == 'G' && result == 'S') {
    p++;
    alert("You won...Computer choose " + result + "...You: " + p + " computer: " + c);
  }
  else {
    alert('Wrong Input...');
  };
  chances++;
} while (chances != 10);
if (p < c) {
  alert("Computer won.. You: " + p + " computer: " + c);
}
else if (p > c) {
  alert("You won.. You: " + p + " computer: " + c);
}
else {
  alert("Match tied... You: " + p + " computer: " + c);
}
 
  
