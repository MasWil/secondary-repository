var stemClass = {
students: 18,
classroom:"F103"
}

var userInput = prompt("Classroom or students");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
//if they enter classroom or students the code is true it will run the code

window.alert(stemClass[lowerCase]);
}
else {
for (i=1; i<4; i++){
//Make the code run 4 times if the answer is wrong
var userInput = prompt("Classroom or students. You have tried" + " " + i + " " + "times");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
window.alert(stemClass[lowerCase]);
}
}
}

