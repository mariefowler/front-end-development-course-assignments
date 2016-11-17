function update() {
    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var emailAddress = getValue('emailAddress');

    var messages = [  ];
    if (firstName == "") {
        messages.push("First name is required");
    }
    if (lastName == "") {
        messages.push("Last name is required");
    }
    if (emailAddress == "") {
        messages.push("email address is required");
    }

    var errElm = getElm('error-list');

    var html = '';
    for (var i = 0; i < messages.length; i++) {
        html += messages[i] + '<br/>';
    }
        getElm.innerHTML = html;

        
    
    var user = {
        firstname: firstName,
        lastname: lastName,
        emailaddress: emailAddress

    }

    user.fullname = function () {
        return this  firstName + ' ' + lastName;

    }
    


var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}


function myFunction() {
    alert("Submitted");
}
