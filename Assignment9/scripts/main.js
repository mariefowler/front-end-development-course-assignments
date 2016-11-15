
var name = "Marie Fowler ";
document.getElementById('partOne').innerHTML = name;

var foo = " this is not an integer";
document.getElementById('partTwo').innerHTML = foo;

var partThree;
partThree = 5;
partThree += 10;
partThree *= 14;
partThree -= 25;
document.getElementById('partThree').innerHTML = partThree;

var firstName = "Marie";
var lastName = "Fower";
var fullName = firstName + " " + lastName;
document.getElementById('partFour').innerHTML = fullName;

var myHtml;
myHtml = " ";
myHtml += "<h2>Title</h2>";
myHtml += "<p>Lorem ipsum dolor</p>";
myHtml += "<h3>Pellentesque habitant morbi</h3>";
myHtml += "<p>Morbi in sem quis dui placerat ornare</p>";
document.getElementById('partFive').innerHTML = myHtml;


var part6Number = getRandomNumber();
var message = '';

if (part6Number > 50) {
    message = "Above 50";
} else {
    message = "Below or equal to 50";
}

document.getElementById('part6Result').innerHTML = message;
document.getElementById('part6Number').innerHTML = part6Number;


var part7Number = getRandomNumber();
var message2 = "";
if (part7Number < 25) {
    message2 = 'Below 25';
}
else if (part7Number >= 25 && part7Number < 50) {
    message2 = 'Between 25 and 50';
}
else if (part7Number >= 50 && part7Number < 75) {
    message2 = 'Between 50 and 75';
}
else {
    message2 = 'Above 75';

}

document.getElementById('part7Result').innerHTML=message2;
document.getElementById('part7Number').innerHTML= part7Number;

var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for ( i = 0; i  < 11; i++) 
{ console.log (i);
}
document.querySelector('.bonus').style.backgroundColor = 'blue';

////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}