
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
myHtml += "&lt;h2>Title&lt;/h2>";
myHtml += "&lt;p>Lorem ipsum dolor&lt;/p>";
myHtml += "&lt;h3>Pellentesque habitant morbi&lt;/h3>";
myHtml += "&lt;p>Morbi in sem quis dui placerat ornare. &lt;/p>";
document.getElementById('partFive').innerHTML = myHtml;










var part6Number =getRandomNumber(); 

/**
 *      Part 7
 */
var part7Number = getRandomNumber();




////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}