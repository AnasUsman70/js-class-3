//chapter 10(if statement)

//Q1
var city = prompt();
if(city === "karachi"){
    console.log("The City Of Lights");
}

//Q2
var x = prompt();
if(x === "z"){
    alert("the condition is true")
}
//Q3
var zipCode = prompt();

if(zipCode === "10010" ){
    alert("karachi")

}
else{
    alert("please write correct city");
}
//Q4

var x = 1;
if(x === 1){
    console.log(x);
}

//chapter 11(comparsion opretrs )

//Q1

var firstName = "anas"
var name = prompt("enter your name");
if ( firstName !== name  ){
    alert("name is Notcorrect!")
} ;

//Q2

var num =5;
var num2 = +prompt("enter num");
if(num2 >= num){
    alert("greater number")
}

//Q3

var x = 2;
if(x !== 3){
    x = 3;
}
//Q4

var firstName = prompt("name");
var anotherName = "john";
if(firstName !== anotherName){
    alert("No match")
}

//chapter 12 (if else)

//Q1
var b=5;
var c= +prompt();
if( b >= c){
    alert("greater");
}
else if(b <= c){
    alert("less than")
}


//Q2

var marks = parseFloat(prompt("Enter your marks:"));


var percentage = (marks / 100) * 100;


var grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

alert("Your percentage is: " + percentage);
alert("Your grade is: " + grade);

//Q3

var a = +prompt()

if (a === 10){
    alert("a is 10")
}
else {
    alert("the correct value is a")
}

//Q4

var city = prompt("enter city name");

if(city === "karachi"){
    alert("it is karachi")
}
if(city === "lahore"){
    alert("it is lahore")
}
else{
    ("it is not karachi or lahore")
}

//Chapter 13 (Testing sets of condation)

//Q1
    if (a === b && c === d){

    }

//Q2

if (a === b || c !== d) {

}
//Q3
if ((name === "ali" || name === "rehman") && age < 60){

}
Q4
var first = 10;
var second = 20;

if(first < second && second> first){
    alert("the value is same")
}

//Q5

var first_Name = "anas";
var second_Name = "usman";

var inName = prompt("enter name");
var outName = prompt("enter name");

if(first_Name === inName && outName === second_Name){
    alert("your name is corrct");
}

//Chapter 14 (If statements nested)

//Q1

var passward = prompt("Enter your Passward");
if(passward !== "")
if(passward.length <= 5){
    alert("passward must be greter than")
}
else{
    alert("ok")
}
 //Q2

var a = 1;
var c  ="max"
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
//Q3

if (a === 1 && c === "Max") {
    alert("OK");
}

//Q4
var variable1 = 10;
var variable2 = 10;


if (variable1 === variable2) {
    if (variable1 <= variable2) {
        alert("Both conditions are true.");
    }
}






