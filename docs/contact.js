function validateForm() {
  var x = document.forms["myForm"]["wholeName"]["Address"]["Location"]["Zip"]["Phone"]["Email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function msg() {
  alert("User Name and Information would be displayed here")
}
