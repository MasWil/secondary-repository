var newName = prompt("What is his new First Name?")

var cole = {
firstName:"Cole",
lastName:"House",
age: 15,
grade:10
}
window.alert(cole.firstName);
window.alert(cole.firstName  = newName);

//array in object//
var Masen ={
firstName:"Masen",
age: 16, 
grade: 11,
friends:["lil boat", "connor Mcgregor", "yoda"]
};
var Willy ={
firstName:"Willy",
age: 15, 
grade: 10,
friends:["jim", "joe", "jac"]
};
var jon ={
firstName:"jon",
age: 35, 
grade: 12,
friends:["Cleveland Brown", "Peter Griffy", "Prisca Lee"]
};

var x =[ Masen,Willy,jon];

window.alert(x[1].friends[0]);


//New object in array
var question = prompt("How much money do you have")

var bankAccount= {};
bankAccount["name"] = "Masen",
bankAccount["balance"] = question;
var deposit = prompt("how much money you want to withdraw")
var answer = [(bankAccount["balance"])-(deposit)];
window.alert(answer);
