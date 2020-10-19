function validateForm() {
  var name = document.forms["myForm"]["wholeName"].value;
  var address = document.forms["myForm"]["Address"].value;
  var location = document.forms["myForm"]["Location"].value;
  var zip = document.forms["myForm"]["Zip"].value;
  var phone = document.forms["myForm"]["Phone"].value;
  var email = document.forms["myForm"]["Email"].value;
  
  
  if (name.length<1) {
    document.getElementById("err1")"Please enter first and last name";
  }
  if (address.length<1) {
    document.getElementById("err2") = "Please enter first and last name";
  }
  if (location.length<1) {
    document.getElementById("err3") = "Please enter first and last name";
  }
  if (zip.length<1) {
   document.getElementById("err4") = "Please enter first and last name";
  }
  if (phone.length<1) {
    document.getElementById("err5") = "Please enter first and last name";
  }
  if (email.length<1) {
   document.getElementById("err6") = "Please enter first and last name";
  }
  if(name.length<1 || address.length<1 || location.length<1 || zip.length<1 || phone.length<1 || email.length<1) {
  return false;
  }
}


function msgSend() {
  alert("Your information has been sent")
}

function msgReset() {
  alert("Put code that will take out user information")
}
