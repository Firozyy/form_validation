// function validate(){

$("#numberError").hide();
$("#nameError").hide();
$("#mailError").hide();


function PhoneValidation() {

    let mobNomb = $("#phone_number").val();



    if (mobNomb == null || mobNomb == '') {
        $("#numberError").show();
        $("#numberError").html("Please Enter Your Name");
        $("#phone_number").css("border-bottom", "solid 2px #FF0000");
        return false;

    }
    else if (mobNomb.length < 10) {
        $("#numberError").show();
        $("#numberError").html("Please Enter 10 Numbers");
        $("#phone_number").css("border-bottom", "solid 2px #FF0000");
        return false;

    }
    else {
        $("#numberError").hide();
        $("#phone_number").css("border-bottom", "solid 2px #00FF00");
        return true;
    }

}
//NameValidation
function NameValidation() {

    let forName = $("#Name").val();

    if (forName == null || forName == '') {


        $("#nameError").show();
        $("#nameError").html("Please Enter Your Name");
        $("#Name").css("border-bottom", "solid 2px #FF0000");
        return false;
    }
    else if (forName.length < 2) {
        $("#nameError").show().text("Enter a valid name");
        $("#nameError").css("color", "red");
        $("#Name").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {
        $("#nameError").hide();
        $("#Name").css("border-bottom", "solid 2px #00FF00");
        return true;


    }




}
//myFunctionEmail()

function Emailvalidation() {

    let formail = $("#Email").val();

    var validRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (formail.match(validRegex)) {

        $("#mailError").hide();
        $("#Email").css("border-bottom", "solid 2px #00FF00");

        return true;

    } else if (formail == null || formail == '') {

        $("#mailError").show();
        $("#mailError").html("Please Enter Your Email");
        $("#Email").css("border-bottom", "solid 2px #FF0000");

        return false;
    }
    else {

        $("#mailError").show();
        $("#mailError").html("Please Enter Your Valid Email");
        $("#Email").css("border-bottom", "solid 2px #FF0000");


        return false;

    }


}

$("#contactForm").submit(function (e) {
    e.preventDefault();

    if (PhoneValidation() == true && NameValidation() == true && Emailvalidation() == true) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwqwOLwLmf0GiXMYY7HN6Y5Edy4H5y1Xy2RBVsaiZvrfTIkE_1ya8HnskAu7Xfml90I/exec",
            data: $("#contactForm").serialize(),
            method: "post",
            success: function (response) {
                

                $("#successModal").modal("show");
                // window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")
                $("#ErrorModal").modal("show");

            }
        })
    } else {
        if (PhoneValidation() == false) {
            $("#numberError").show();
        } if (NameValidation() == false) {
            $("#nameError").show();
        } if (Emailvalidation() == false) {
            $("#mailError").show();
        }
        $("#failedModal").modal("show");
    

    }

});


