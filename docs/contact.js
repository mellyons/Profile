function validateForm() {
  var name = document.forms["myForm"]["wholeName"];
  var address = document.forms["myForm"]["Address"];
  var location = document.forms["myForm"]["Location"];
  var zip = document.forms["myForm"]["Zip"];
  var phone = document.forms["myForm"]["Phone"];
  var email = document.forms["myForm"]["Email"];
  
  
  if (name.value == "") {
    window.alert("Please enter first and last name");
    name.focus();
    return false;
  }
  if (address.value == "") {
    window.alert("Please enter your address");
    address.focus();
    return false;
  }
  if (location.value == "") {
    window.alert("Please enter your city and state");
    location.focus();
    return false;
  }
  if (zip.value == "") {
   window.alert("Please enter your zip code");
   zip.focus();
   return false;
  }
  if (phone.value == "") {
    window.alert("Please enter your phone number");
    phone.focus();
    return false;
  }
  if (email.value == "") {
    window.alert("Please enter a valid email address");
    email.focus();
    return false;
  }
  
  return true;
}

