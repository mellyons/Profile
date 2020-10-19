function validateForm() {
  var name = document.forms["myForm"]["wholeName"];
  var address = document.forms["myForm"]["Address"];
  var location = document.forms["myForm"]["Location"];
  var zip = document.forms["myForm"]["Zip"];
  var phone = document.forms["myForm"]["Phone"];
  var email = document.forms["myForm"]["Email"];
  
  
  if (name.value == "") {
    window.alert("Please enter first and last name");
  }
  if (address.value == "") {
    window.alert("Please enter your address");
  }
  if (location.value == "") {
    window.alert("Please enter your city and state");
  }
  if (zip.value == "") {
   window.alert("Please enter your zip code");
  }
  if (phone.value == "") {
    window.alert("Please enter your phone number");
  }
  if (email.value == "") {
   window.alert("Please enter a valid email address");
  }
  
  return true;
}

