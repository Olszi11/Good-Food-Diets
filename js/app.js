$(function() {
  //checkbox z wysylanie wiadomosci section4
  var validateName =$(".validate_error_name");
  var validateEmail = $(".validate_error_email");
  var validatePhone = $(".validate_error_phone");
  var validateMessage = $(".validate_error_message");
  var nameForm = $('#name');
  var emailForm = $("#email");
  var phoneNumber =$("#phoneNumber");
  var messageForm = $("#message");
  var buttonSend=$("#buttonSend");


  validateName.hide();
  validateEmail.hide();
  validatePhone.hide();
  validateMessage.hide();


  var error_name = false;
  var error_email = false;
  var error_phone = false;
  var error_message = false;

  nameForm.focusout(function(){
    check_name();
  })
  emailForm.focusout(function(){
    check_email();
  })
  phoneNumber.focusout(function(){
    check_phone();
  })
  messageForm.focusout(function(){
    check_message();
  })

  function check_name(){
    var name_length = nameForm.val().length;
    if(name_length<5 || name_length>20)
    {
      validateName.html("Should be between 5-20 characters");
      validateName.show();
      error_name= true;
    }
    else {
      validateName.css("display", "none");
    }
  }

  function check_email(){
    if((emailForm.val().indexOf("@")== -1) || (emailForm.val().indexOf(".") == -1))
    {
      validateEmail.html("Email should contain @ and .");
      validateEmail.css("display", "block");
      error_email= true;
    }
    else {
      validateEmail.css("display", "none");
    }
  }

  function check_phone(){
    var phone_length = phoneNumber.val().length;
    if(phone_length<9 || phone_length>13)
    {
      validatePhone.html("Should be between 9-13 characters");
      validatePhone.show();
      error_phone= true;
    }
    else {
      validatePhone.css("display", "none");
    }
  }

  function check_message(){
    var message_length=messageForm.val().length;
    if(message_length<10 || message_length>60)
    {
      validateMessage.html("Should be between 10-60 characters");
      validateMessage.show();
      error_message= true;
    }
    else {
      validateMessage.css("display", "none");
    }
  }

  buttonSend.on("click", function(){
    error_name = false;
    error_email= false;
    error_phone = false;
    error_message=false;

    check_name();
    check_email();
    check_phone();
    check_message();

    if(error_name == false && error_email==false && error_phone==false && error_message ==false)
    {
      alert("Your message was sent!");
      clearField();
    }
    else{
      alert("Please check your form.");
    }
  })


  function clearField(){
    nameForm.val("");
    emailForm.val("");
    phoneNumber.val("");
    messageForm.val("");
  }

    clearField();

});
