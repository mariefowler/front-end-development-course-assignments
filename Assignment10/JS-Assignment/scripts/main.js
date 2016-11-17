var arr = {};

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = getValue('fullName');
    console.log(firstName);
    console.log(lastName);
    console.log(fullName);

    var fullname = firstName + ' ' + lastName;
    document.getElementById('p1_fullName').innerHTML = fullname;

    var isFilledOut;
    if (firstName.length > 0 && lastName.length >0) {
        isFilledOut = true;
    }

    document.getElementById('p1_fullNamelength').innerHTML = fullNamelength;


    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    document.getElementById("p2_email").innerHTML = emailAddress;

    var isValidEmail;
    if (emailAddress.indexOf('@') > -1 {
        isValidEmail = false;

        document.getElementById('')
        document.getElementById('p2_emailLength')
    }

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    document.getElementById('p3_randomNumber').innerHTML = randomNumber;

    var parsedNum = parseInt=randomNumber);
    var isValidNumber;
    if(parsedNum !== NaN){
        isvalidNumber = false;
    }


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    var array = [] ;
    array.push(arrayInput);









    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}