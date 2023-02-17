prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore > 70) {
  alert("Your Love Score is " + loveScore + "%" + " You love each other like Jack and Rose.");
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your Love Score is " + loveScore + "%" + " You can work something out.");
}
  
if (loveScore <= 30) {
  alert("Your Love Score is " + loveScore + "%" + " Wow! You go togther like oil and water");
}

