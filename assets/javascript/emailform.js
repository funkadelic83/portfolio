$(document).ready(function () {

var name = ""; 
var email = "";
var message = "";

$("#submit").on("click", function(event) {
    event.preventDefault();
    name = $("#nameInput").val().trim();
    email = $("#emailInput").val().trim();
    message = $("#messageInput").val().trim();
    console.log(name, email, message);
} )
})


// playerOneNameLocal = $("#playerOneNameInput").val().trim();