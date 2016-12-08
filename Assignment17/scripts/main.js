$(document).ready(function(){



});

$('span').hide();//$('.error').hide();


$('.input-group').filter(':even').addClass('even');

$('#firstName').on('blur', function(){
    var input = $(this);

    if (input.val() === '') {
        input.closest('.input-group').find('.requiredMsg').fadeIn(); 
    } else {
        input.closest('.input-group').find('.requiredMsg').fadeOut();
    }
});

$('#lastName').on('blur', function () {
    var input = $(this);
    if (input.val() === '') {
        input.closest('.input-group').find('.requiredMsg').fadeIn();
    } else {
        input.closest('.input-group').find('.requiredMsg').fadeOut();
    }
});

$('#emailAddress').on('blur', function () {
    var input = $(this);
    if (input.val() === '') {
        input.closest('.input-group').find('.requiredMsg').fadeIn();
    } else {
        input.closest('.input-group').find('.requiredMsg').fadeOut();
    }
});
//var msg=input.closest('input-group').find('.requiredMsg');
//$('#emailAddress').on('blur', function(){
//var input=$(this);
//var inputValue=input.val();

//if(inputValue.indexOf('@')===-1|| inputValue.indexOf('.com')===-1){
//msg.fadeIn();}
//else {msg.fadeOut();}