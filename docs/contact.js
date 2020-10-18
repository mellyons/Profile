function validateForm() {
  var name = document.forms["myForm"]["wholeName"];
  var address = document.forms["myForm"]["Address"];
  var location = document.forms["myForm"]["Location"];
  var zip = document.forms["myForm"]["Zip"];
  var phone = document.forms["myForm"]["Phone"];
  var email = document.forms["myForm"]["Email"];
  
  
  if (name.value == "") {
    alert("Please enter first and last name");
    name.focus();
    return false;
  }
  
  if (address.value == "") {
    alert("Please enter mailing address");
    address.focus();
    return false;
  }
  if (location.value == "") {
    alert("Please enter city and state");
    location.focus();
    return false;
  }
  if (zip.value == "") {
    alert("Please enter zip code");
    return false;
  }
  if (phone.value == "") {
    phone.focus();
    alert("Please enter phone number");
    return false;
  }
  if (email.value == "") {
    alert("Please enter email address");
    email.focus();
    return false;
  }
  
  return true;
}


