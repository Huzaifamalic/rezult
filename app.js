
 

var names = prompt("Enter your name");
var PhysMark = +(prompt("Enter your Physics mark"));
var EnglishMark = +(prompt("Enter your English mark"));
var UrduMark = +(prompt("Enter your Urdu mark"));
var MathMark = +(prompt("Enter your Math mark"));
var SindhiMark = +(prompt("Enter your Sindhi mark"));
var ObatallMark = PhysMark + EnglishMark + UrduMark + MathMark + SindhiMark;
var TotalMark = 500;
var Percentage = (ObatallMark / TotalMark) * 100;

console.log(names + "'s total marks: " + ObatallMark);
console.log(names + "'s percentage: " + Percentage + "%");
