var first = prompt("Enter number between 1-6")
if ((first < 1) || (first > 6)) {
window.alert("YOu can not follow directions")
}
else {
var second = prompt("Guess a number between 1-6")
if (first == second) {
window.alert("You Win")
}
else {
window.alert("player one's answer was" + "" + first)
window.alert("You chose" + "" + second)
}
}