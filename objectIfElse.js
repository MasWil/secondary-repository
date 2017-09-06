var userInput = prompt("Classroom or students");
var stemClass = {
students: 18,
classroom:"F103"
}
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
window.alert(stemClass[lowerCase]);
}
else {
window.alert("Wrong")
askAgain();
}

function askAgain(){
var userInput = prompt("Classroom or students");
var stemClass = {
students: 18,
classroom:"F103"
}
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
window.alert(stemClass[lowerCase]);
}
else {
window.alert("Wrong")
askAgain();
}
}