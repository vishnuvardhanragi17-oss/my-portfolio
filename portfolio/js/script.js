function validate() {
  let mobile = document.getElementById("mobile").value;

  if (mobile.length != 10 || isNaN(mobile)) {
    alert("Enter valid 10-digit mobile number");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}