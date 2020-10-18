function validateForm() {
  var name = document.forms["myForm"]["wholeName"];
  var address = document.forms["myForm"]["Address"];
  var location = document.forms["myForm"]["Location"];
  var zip = document.forms["myForm"]["Zip"];
  var phone = document.forms["myForm"]["Phone"];
  var email = document.forms["myForm"]["Email"];
  
  
  if (name == "") {
    alert("Please enter first and last name");
    return false;
  }
  
  if (address == "") {
    alert("Please enter mailing address");
    return false;
  }
  if (location == "") {
    alert("Please enter city and state");
    return false;
  }
  if (zip == "") {
    alert("Please enter zip code");
    return false;
  }
  if (phone == "") {
    alert("Please enter phone number");
    return false;
  }
  if (email == "") {
    alert("Please enter email address");
    return false;
  }  
}


