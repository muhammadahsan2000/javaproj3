var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);


var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

alert("Welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];

alert("Welcome to " + mixedArray[1]);


var pets = [];
pets[0] = "Cats";
pets[1] = "Dogs";
pets[2] = "Horse";
pets[3] = "lizert";
pets[4] = "cow";


pets.pop();
pets.push("Monkey","Goat");
pets.shift();
pets.unshift("Fish","pegion");
pets.splice(2 , 2 , "duck", "perrot");


var abc = pets.slice(2,6);


console.log( abc );

var cityToCheck;
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];



if (cityToCheck === cleanestCities[0])
 {
 alert("It's one of the cleanest cities");
 }
 else if (cityToCheck === cleanestCities[1]) {
 alert("It's one of the cleanest cities");
 }
 else if (cityToCheck === cleanestCities[2]) {
 alert("It's one of the cleanest cities");
 }
 else if (cityToCheck === cleanestCities[3]) {
 alert("It's one of the cleanest cities");
 }
 else if (cityToCheck === cleanestCities[4]) {
 alert("It's one of the cleanest cities");
 }
 else {
 alert("It's not on the list");
 }


 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities");
 }
 }


 
 var matchFound = "no";
 for (var i = 0; i <= 4; i++);{

 if (cityToCheck === cleanestCities[i]) {
 matchFound = "yes";
 alert("It's one of the cleanest cities");
 }
 }
 if (matchFound === "no") {
 alert("It's not on the list");
  }
  var matchFound = false;
 for (var i = 0; i <= 4; i++);{
 if (cityToCheck === cleanestCities[i]) {
 matchFound = true; alert("It's one of the cleanest cities");
 }
 }
 if (matchFound === false) {
 alert("It's not on the list");
 }

 var matchFound = false;
 for (var i = 0; i <= 4; i++);{
 if (cityToCheck === cleanestCities[i]) {
 matchFound = true;
 alert("It's one of the cleanest cities");
 
 } 
}
 if (matchFound === false) {
 alert("It's not on the list");
 }

 var numElements = cleanestCities.length;
 

 var matchFound = false;
 for (var i = 0; i < numElements; i++);
 {
 if (cityToCheck === cleanestCities[i]) 
 {
 matchFound = true;
 alert("It's one of the cleanest cities");

 
}

 if (matchFound === false) {
 alert("It's not on the list");
 }
}





 var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
 var fullNames = [];
 for (var i = 0; i < firstNames.length; i++) {
 for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);
 }
}
 
    