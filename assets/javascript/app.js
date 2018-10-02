//UPDATED PORTFOLIO JAVASCRIPT PAGE

//INITIALIZE DOCUMENT
$(document).ready(function () {

    //INITIALIZE SIDENAV
    $('.sidenav').sidenav();

    //INITIALIZE MATERIALIZE TEXT INPUTS
    M.updateTextFields();

    //INITIALIZE MATERIALIZE COMMENT INPUTS
    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));

});
