function myFunction() {
    var fname = document.forms["gform"]["entry.2107509977"].value;
    var lname = document.forms["gform"]["entry.777334708"].value;
    var streetnum = document.forms["gform"]["entry.965726825"].value;
    var street = document.forms["gform"]["entry.165362596"].value;
    var abb = document.forms["gform"]["entry.1861142526"].value;
    var city = document.forms["gform"]["entry.289470484"].value;
    var state = document.forms["gform"]["entry.1054065235"].value;
    var zip = document.forms["gform"]["entry.693994102"].value;
    var phonenum = document.forms["gform"]["entry.2010543124"].value;
    var email = document.forms["gform"]["entry.742874748"].value;
    var bdate = document.forms["gform"]["entry.1588472551"].value;
    var message = document.forms["gform"]["entry.1956245570"].value;
    var president = document.forms["gform"]["entry.1796325525"].value;
    op = confirm("First Name: " + fname + "\nLast Name: " + lname 
    + "\nStreet(House) Number: " + streetnum + "\nStreet Name: "
    + street + "\nStreet Abbreviation: " + abb + "\nCity: " + city 
    + "\nState: " + state + "\nZip Code: " + zip + "\nPhone Number: "
    + phonenum + "\nEmail Address: " + email + "\nBirth Date: " +
    bdate + "\nMessage: " + message + "\nVerification: " + president);
  }

  function validateForm() {
    var fname = document.forms["gform"]["entry.2107509977"].value;
     return validateNotBlank(fname, "entry.2107509977");
     var lname = document.forms["gform"]["entry.777334708"].value;
     return validateNotBlank(lname, "entry.777334708");
     var streetnum = document.forms["gform"]["entry.965726825"].value;
     return validateNotBlank(streetnum, "entry.965726825");
     var street = document.forms["gform"]["entry.165362596"].value;
     return validateNotBlank(street, "entry.165362596");
     var abb = document.forms["gform"]["entry.1861142526"].value;
     return validateNotBlank(abb, "entry.1861142526");
     var city = document.forms["gform"]["entry.289470484"].value;
     return validateNotBlank(city, "entry.289470484")
     var state = document.forms["gform"]["entry.1054065235"].value;
     return validateNotBlank(state, "entry.1054065235");
     var zip = document.forms["gform"]["entry.693994102"].value;
     return validateNotBlank(zip, "entry.693994102");
     var phonenum = document.forms["gform"]["entry.2010543124"].value;
     return validateNotBlank(phonenum, "entry.2010543124");
     var email = document.forms["gform"]["entry.742874748"].value;
     return validateNotBlank(email, "entry.742874748")
     var bdate = document.forms["gform"]["entry.1588472551"].value;
     return validateNotBlank(bdate, "entry.1588472551");
     var message = document.forms["gform"]["entry.1956245570"].value;
     return validateNotBlank(message, "entry.1956245570");
     var president = document.forms["gform"]["entry.1796325525"].value;
     return validateNotBlank(president, "entry.1796325525");
  }
  
  function validateNotBlank(value, label) {
      if (value==null || value=="") {
          alert("Please enter a value for " + label);
          return false;
      }
      return true;   
  }