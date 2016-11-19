
var btn = getE('btnSubmit');
btn.addEventListener('click', update);

   function update(){
    //creates empty array
    var errorMsg = [];
   
    var firstName = getElm('firstName');
    if(firstName.value===''){
        errorMsg.push('First Name is required');
        firstName.classList.add(errClass);
    }
   { 
    var lastName = getElm('lastName');
    if(lastName.value===''){
        errorMsg.push('Last Name is required');
        lastName.classList.add(errClass);
    }
   { 
    var email = getElm('emailAddress');
    if(emailAddress.value===' '){
        errorMsg.push('email is required');
        email.classList.add(errClass);

    }else if (email.value.indexOf('@') == -1 ||
        email.value.indexOf('.com') == -1 {
        errorMsg.push('A Valid Email is required');
        email.classList.add(errClass);
    }

    }
   var password = getElm('password');
   if(password.value== ' '){
       errorMsg.push('Password is required');

   }
   var passwordConfirm = getElm('passwordConfirm');
   if (passwordConfirm.value === ' ') {
       errorMsg.push('Confirm is required');
       passwordConfirm. classList.add(errClass);
   }
   
   If (password.value !== ' ' &&
       passwordConfirm.value !== ' ' &&
       password.value !== passwordConfirm.value){

           errorMsg.push('Passwords must match');

           password.classList.add(errClass);
           passwordConfirm.clssList.add(errClass);

       }
   
   
   function getElm(id) {
        return document.getElementbyId(id);
    }

   var resetBtn = getElm('btnReset');
   resetBtn.addEventListener('click', reset);

   function reset(){
       var input IdArray = ['firstName', 'lastName', 'emailAddress', 'password', 'passwordconfirm' ]

       for(var i=0; i< inputIdArray)
   }

   // document.getElementbyID('Submit').addEventListener("click", btnSubFunc () 
//});
   // document.getElementById('Reset').addEventListener("click", btnResFunc () {
    //    alert('you clicked Reset')
 //   });

    //function btnSubFunc () {
      //  alert (this.id + " : you clicked Submit");
 //   }
