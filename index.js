
/*
alert("javascript is now working")
var name_1 = "<h3>md rashedul islam</h3> <br/>";
var profession = "web developer <br/>" ;
document.write(name_1);
document.write(profession);
console.log("console result")
document.write(typeof(true),'<br/>') ;
*/
/*
var num = 20;
num = toString(num);

var num = '20';
var num = '20.201';
num = parseInt(num);
num = parseFloat(num);
*/
/*
var num = 2.5854;
//ei function ta dosomik er porer songkha print kore.
document.write(num.toFixed(3));

//ei function ta total number er songkha print kore
document.write(num.toPrecision(1));

document.write(Number('123'));
*/
/*
var firstName = "Rashedul";
var lastName = "Ratan";

document.write("My Name Is" + " Md " +firstName + " Islam " +lastName);
*/
/*
var text = prompt("Enter Your Name");
var text = text.length;
document.write("character length of " + text);
*/
/*
var text1 = "My Name is ";
var text2 = "Rashedul";
var text = text.toLowerCase()
var text = text.toUpperCase()
var text = text1.concat(text2);
var text = text2.charAt(3);
var text = text2.slice(0,6)
document.write(text);
*/
/*
let firstName = document.getElementById(firstName);
let lastName = document.getElementById(lastName);
let submit = document.getElementById(submit);

submit.addEventListener('click' , () =>{
document.write(firstName);
});

arithmatic operator +,-,*,/,%,**
assingment operator =, +=,-=,*=,/=,**=
*/
/*
var x = 5;
var y = 2;
document.write('x+y =', x+y , ', x-y =', x-y , ', x*y = ', x*y , ', x/y =', x/y , ', x%y =' , x%y ,'<br/>');

var a = 9;
a += 9;// a = a+9
var b = 19;
b -=9 ;//b = b-9
var c = 9;
c *= 9// c = c*9 
var d =30;
d /= 2// d = d/2
var e = 12;
e %= 5;// e = e%5
document.write(a,',',b, ',',c, ',', d, ',',e)
*/

/*
var num1 = prompt("enter first number :");
var num2 = prompt("enter second number :");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var result;

result = num1 + num2;
document.write(num1 ," + " + num2, " = ", result ,"<br/>")

result = num1 - num2;
document.write(num1 ," - " + num2, " = ", result ,"<br/>")

result = num1 * num2;
document.write(num1 ," * " + num2, " = ", result ,"<br/>")

result = num1 / num2;
document.write(num1 ," / " + num2, " = ", result ,"<br/>")

result = num1 % num2;
document.write(num1 ," % " + num2, " = ", result ,"<br/>")
*/


//trepezium (a+b)x height / 2
/*
a = 5;
b = 15;
var base = a,b;
base = a+b;
height = base * 2;
result = height/2
document.write(result)
*/
/*
var num = parseInt(prompt("Enter Your Value"))

if(num % 2 == 0)
document.write("Even")
else
document.write("Odd")

*/
/*
var mark = parseInt(prompt("Enter Your Mark :")) 

if(mark > 100 || mark < 0)
    document.write("Invalid Marks")
else if(mark >= 80 && mark <= 100)
    document.write("A+")
else if(mark >=70 && mark <= 79)
    document.write("A")
else if(mark >=60 && mark <= 69)
    document.write("A-")
else if(mark >=50 && mark <= 59)
    document.write("B")
else if(mark >=40 && mark <= 49)
    document.write("C")
else if(mark >=33 && mark <= 39)
    document.write("D")
else
    document.write("Fail")
*/
/*
var num1 = parseInt(prompt("Enter Your First Number :")) 
var num2 = parseInt(prompt("Enter Your Second Number :")) 
var num3 = parseInt(prompt("Enter Your Third Number :")) 

if(num1 > num2 && num2 > num3)
    document.write("First Large Number is: " + num1)
else if(num2 > num1 && num2 > num3)
    document.write("Second Large Number is : " + num2)
else
    document.write("Third Large Number is : " + num3) 

*/
/*
var letter  = prompt("Enter Your letter :")
letter = letter.toLowerCase()

if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
    document.write("Your letter is Vowel = " + letter)
else
    document.write("Your letter is Consonet = " + letter)    
*/
/*
var digit = prompt("enter your digit :")

if(digit == 0)
    document.write("Zero")
else if(digit == 2)
    document.write("Two")
else if(digit == 3)
    document.write("Three")    
else
document.write("Invalid digit")   

switch(digit){
    case "0":
        document.write("zero")
        break
    case "1":
        document.write("one")
        break
    case "2":
        document.write("two") 
        break 
    default:
    document.write("invalid digit")          
}
*/
/*
var letter = prompt("enter your letter :")
letter = letter.toLowerCase()

switch(letter){
    case "a":
        document.write("Vowel")
        break
    case "e":
        document.write("Vowel")
        break
    case "i":
        document.write("Vowel") 
        break 
    case "o":
        document.write("Vowel") 
        break 
    case "u":
        document.write("Vowel") 
        break 
    default:
    document.write("Consonet")          
}


switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel") 
        break 
    default:
    document.write("Consonet")          
}
*/
/*
sum = 0
for (var x= 2; x <= 6; x = x+2){
    sum = sum + x;
}
document.write(" "+sum)
document.write("<h1>end</h1>")
*/

//1 theke 5 porjonto sonhkhar + fol
 
/*
var f = parseInt(prompt("enter first number :"));
var l = parseInt(prompt("enter last number"));

sum = 0;

for (var x= f; x <= l; x++){
    sum = sum + x;
}

document.write("Sum = "+sum)
*/
/*
for(var x =1; x <= 3; x++){
    var num1 = parseInt(prompt("enter first number :"));
    var num2 = parseInt(prompt("enter second number :"));
    
    var num = num1 + num2;
    console.log(num);
}
*/
/*
var i = 2;
sum  = 0;
 while(i <= 6){
    document.write(i)
    sum = sum +i;
    i = i +2;
}
document.write("Sum = "+ sum);
*/
/*
var i = 1;
sum = 0;
while(i <= 100){

    if(i%3 == 0 && i%5 == 0){
        document.write(" 3 and 5 dara devided = " +i + "</br>")
        sum = sum + i
    }
    i = i +1
}
document.write(" Sum = " + sum)
*/
/*
var  i = 2
sum = 0
do{
    sum = sum+i
    i++
    
}while(i <= 10)
    document.write(" "+sum)
*/
/*
for(var i = 1; i <= 100; i++){
    if(i%2 != 0){
        continue
    }
    document.write(" "+i)
}
*/


/*
var number  = Number(prompt("Enter Your Number :"))
if(number>0){
    document.write("Positive");
}else{
    document.write("Negetive");
}

var result = number>0 ? "Positive" :"Negetive";
*/
/*
if(number>0){
    document.write("Positive");
}else if(number<0){
    document.write("Negetive");
}else{
    document.write("Zero");
}
var result = number >0 ? "Positive" :number<0 ? "Negetive" : "Zero"
*/

/*
var num1 = parseInt(prompt("Enter First Number"));
var num2 = parseInt(prompt("Enter Secont Number"));
var num3 = parseInt(prompt("Enter Third Number"));

var result = num1 > num2 ? "First" : num2 > num3 ? "Second" : "Third"

document.write(result)
*/
/*
var num = 5;
var result = num * num;
document.write("Result = " + result +" <br>")

function add (num1, num2){
    var result = num1 + num2;
    document.write("Addition = " + result +" <br>")
}
function sub (num1, num2){
    var result = num1 / num2;
    document.write("Substraction = " + result +" <br>")
}
function mul (num1, num2){
    var result = num1 * num2;
    document.write("Multiply = " + result +" <br>")
}
function div (num1, num2){
    var result = num1 / num2;
    document.write("Division = " + result +" <br>")
}
add(1,5)
sub(4,2)
mul(5,2)
div(10,2)
*/

//IIFEs(immideatly invokeble function express )
/*
(function disply(num1, num2){
    document.write("Sum = ", num1 + num2)
})(2,3);
*/
// Funtion Express
/*
var message2 = function message (){
    document.write("I love You")
}
message2()
*/
/*
var name1,name2,name3,name4

name1 = "Jamal";
name2 = "Kamal";
name3 = "Rohim";
name4 = "Rina";
document.write(name1)

var text  = new Array(5)
text[0] = "Mofiz";
text[1] = "Jamal";
text[2] = "Kamal";
text[3] = "Rohim";
text[4] = "Rina";

document.write(text)
*/
/*
var text  = Array("Mofiz","Jamal","Kamal","Rana")

document.write(text+"<br>")
text.push("Tina")
document.write(text+"<br>")
text.pop()
document.write(text+"<br>")
document.write(text.length)
*/
/*
var country1 = ['Bangladesh','Nepal'];
var country2 = ['Pakistan','SriLanka'];
var countries =  country1.concat(country2);
document.write(countries)
*/

// var num = [10,20,30,40,50]
/*
var num = new Array();
for(var i = 0;i<5; i++){
    num[i] = parseInt(prompt("Enter Your Number :"))
}
// document.write(num[2])
var sum  = 0;
for(var i = 0;i <5; i++){
    document.write(" "+num[i] + "<br>")
    sum = sum + num[i]
}
document.write("Sum = "+sum)
*/
/*
var text  = Array("Mofiz","Jamal","Kamal","Rana")
document.write(text)
text.shift()
document.write(text)
text.unshift('Rina')
document.write(text)

adding elements using splice
text.splice(0,1,"Rahim","Kuddus")
document.write(text)

remove elements using splice
text.splice(1,2)
document.write(text)

// slice
var newArray = text.slice(2)
document.write(newArray +"<br>")
document.write(text)
*/
/*
function highestScore(scores){
    var max = scores[0]
    for(var x = 1; x < scores.length; x++){
        if(max < scores[x]){
            max = scores[x]
        }
    }
    return max
} 
var scores = [10,25,51,98,32];
var maxScore =  highestScore(scores)
console.log(maxScore);
*/
/*
function higestRunScorer (playerInfo){
    var higestScorer = playerInfo[0][0]
    var higestScore = playerInfo[0][1]
    for(var x = 1; x < playerInfo.length; x++){
        if(higestScore < playerInfo[x][1]){
            higestScore = playerInfo[x][1]
            higestScorer = playerInfo[x][0]
        }
        return higestScorer
    }
}
var playerInfo = [
    ["Ashraful", 95],
    ["Musfik", 55],
    ["Masraffe", 45],
    ["Sakib", 85],
    ["Mahmudullah", 65]
]
var namee = higestRunScorer(playerInfo)
document.write(namee)
*/
/*
var name  = "Md Rashedul Islam";
var age  = 27;
var cgpa = 3.20;
var lang = ["Bnagali","Hindi","English"]

//Constructor
function Student(name,age,cgpa,lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    this.display = function(){   //Constructor funcrion
        document.write(this.name+"<br>")
        document.write(this.age+"<br>")
        document.write(this.cgpa+"<br>")
        document.write(this.lang+"<br>")
    }
}
// object
var student1 = new Student("Md Rashedul Islam",27,3.30,["Bnagali","Hindi","English"]);
var student2 = new Student("Md Kamal Hossain",37,4.30,["Bnagali","Japanise","English"]);

student1.display()
student2.display();
*/
/*
var won = 0
lost = 0
for(var i = 1; i <= 5; i++){
    var guessNumber = parseInt(prompt("Enter Your Number 1 to 5 times : "));
    var randomNumber = Math.floor(Math.random()*5 + 1);
    if(guessNumber == randomNumber){
        document.write("You have won" +"<br>")
        won++
    }else{
        document.write("You have lost . Random number was " + randomNumber+"<br>");
        lost++
    }
}
document.write("You won "+ won + " times" + "<br>");
document.write("You lost "+ lost + " times")
*/
/*
var date  = new Date();
document.write(date +"<br>")
var year = date.getFullYear()
document.write("Year = "+year+"<br>")
var month = date.getMonth()
document.write("Month = "+month+"<br>")
var day = date.getDay()
document.write("Day = "+day+"<br>")
var currentDate = date.getUTCDate()
document.write("Date = "+currentDate+"<br>")
var hours = date.getHours()
document.write("Hours = "+hours+"<br>")
var minutes = date.getMinutes()
document.write("Minutes = "+minutes+"<br>")
*/

// var myHeading = document.getElementById("heading");
// myHeading.innerHTML = "Hi, I am javaScript Heading "
// document.querySelector("#heading").innerHTML = "by"
/*
var myVar = document.querySelector("#imageId")
function myFunction1(){
    myVar.src = "images/1.jpg"
}

function myFunction2(){
    myVar.src = "images/2.jpg"
}
*/
/*
var myVar = document.querySelector("#vId");
myVar.addEventListener("click",function() {
    alert("hi");
});
myVar.addEventListener("mouseover",function() {
    myVar.classList.add("village_style")
});

myVar.addEventListener("mouseout",function() {
    myVar.classList.remove("village_style")
});
*/
/*
// anonomus function
var len =  document.querySelectorAll(".myButton").length
for(i = 0; i< len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        var text  = this.innerHTML
        document.querySelector("#headingId").innerHTML = text + " Is Clicked";
    })
}
*/
/*
var len =  document.querySelectorAll(".myButton").length
for(i = 0; i< len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        var text  = this.innerHTML;
        console.log(text)
        audioPlay(text)
        playAnimation(text)
    });
}
function audioPlay (text) {
    switch(text){
        case "a":
            var audio = new Audio("sounds/kajol.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause();
            },2000)
            break;

        case "b":
            var audio = new Audio("sounds/heart-touching.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause();
            },2000)
            break; 

        case "c":
            var audio = new Audio("sounds/remix.mp3");
            audio.play();
            setTimeout(function(){
                audio.pause();
            },2000)
            break;      
    }
}
function playAnimation(text) {
    var seletedButton = document.querySelector("."+text);
    seletedButton.classList.add("anim");
    setTimeout(function(){
        seletedButton.classList.remove("anim");
    },1500)
    
}
//keypress event listener
document.addEventListener("keypress", function (event) {
    var text = event.key;
    audioPlay(text)
    playAnimation(text)
})
var count = 0;
document.querySelector("textarea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    document.querySelector("#keypress_pid").innerHTML = "Number of text = "+count
})
*/
/*
const input = document.querySelector("input[name=name]");
input.addEventListener("change", changeHandler);

function changeHandler (e) {
    // console.log(e)
    // console.log(e.type);
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    console.log(e.target.value)
}

const programs = document.querySelectorAll("input[name=program]");
Array.from(programs).map((program) =>{
    program.addEventListener("change", programHandler);
});

function programHandler(e){
    if(e.target.checked){
        console.log(e.target.value)
    }
}

const depart = document.querySelector("#department")
depart.addEventListener("change", departmentHandler);
function departmentHandler(e) {
    console.log(e.target.value)
} 
*/
/*
// submit events
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
form.addEventListener("submit", formHandler);
function formHandler(e) {
    e.preventDefault();
    const userInfo = {
        name:name.value,
        email:email.value,
        password:password.value
    }
    console.log(userInfo)
    name.value = "";
    email.value = "";
    password.value = "";
}
*/
/*
const video = document.querySelector("video");
video.addEventListener("canplay", function () {
    console.log("canplay")
})

video.addEventListener("play", function () {
    console.log("play")
})

video.addEventListener("playing", function () {
    console.log("playing")
})

video.addEventListener("pause", function () {
    console.log("pause")
})
 
video.addEventListener("ended", function () {
    console.log("thanks for watching")
})

video.addEventListener("volumechange", function () {
    console.log("volume changed")
})
*/

/*
const details = document.querySelector("details");
details.addEventListener('toggle', function(e){
    console.log(e.target.open)
})
window.addEventListener('resize', function () {
    const width = window.outerWidth;
    const hieght = window.outerHeight;
    console.log(`width: ${width}, height: ${hieght}`);
})
*/
/*
console.clear();
var dived = document.querySelector(".clicked");
dived.addEventListener("click", function (e) {
    // console.log(e.target.className)
    // console.log(e.target.innerHTML)
    // console.log(e.target.textContent)
    console.log(e.target.innerText)
})

dived.addEventListener("dblclick", function () {
    console.log("dblClicked")
})

dived.addEventListener("mousedown", function () {
    console.log("mousedown")
})

dived.addEventListener("mouseup", function () {
    console.log("mousedup")
})

dived.addEventListener("mouseenter", function () {
    console.log("mouseenter")
})
dived.addEventListener("mouseleave", function () {
    console.log("mouseleave")
})

dived.addEventListener("mousemove", function () {
    console.log("mousemove")
})
dived.addEventListener("mouseover", function (e) {
    // console.log("clientX = " + e.clientX + " ClientY = "+e.clientY)
    console.log("offsetX = " + e.offsetX + " offsetY = "+e.offsetY)
})
*/

var buttons = document.querySelectorAll(".btn");
Array.from(buttons).map((button) =>{
    button.addEventListener("click", function (e) {
        console.log(e.target.innerText)
    })
})



