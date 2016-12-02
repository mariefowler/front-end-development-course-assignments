$(document).ready(function(){

     ///// Code goes here - 1st way
    $('#btnOne').on('click', function () {
        alert('hello');
    });

    ////2nd way
   /* $('#btnOne').on('click', sayhello);

    function sayhello() {
        alert('hello');
    }

    //Old Way - #3
    document.getElementById('btnOne').addEventListener('click', sayhello);
    */

    $('#btnTwo').on('click', function () {
        $('.update-html').html('Hello World');
    })

    $('#btnThree').on('click', function () {
        $('#text-update').val('Hello World');
    })

    $('#btnCopyHtml').on('click', function () {
        var copiedHtml= $('.copy-html').html(); 
        $('.paste-html').html(copiedHtml);
    })

    $('#btnCopyValues').on('click', function () {
        var copiedValue= $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    })

});








 /*  //Get Html
   var html = $('.myclass').html();
   //Get Value
   var val = $('.myInput').val();*/


  