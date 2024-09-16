function validateErrors(formField, errorField) {
  // Create a variable for the form field
  theField = document.getElementById(formField);

  // Create a variable for the error field
  theError = document.getElementById(errorField);

  // Create a new pattern by reading in pattern from HTML and adding delimiters
  var thePattern = new RegExp("^" + theField.pattern + "$");

  // Test data in field against regex pattern from HTML
  if (!thePattern.test(theField.value)) {
    // Set field background to red
    theField.style.background = "#FF9999";

    // Display the <span> containing the error message
    theError.style.display = "block";

    // Display the error message by reading the HTML title and writing it to the <span>
    theError.innerHTML = theField.title;

    // Set focus to field
    theField.focus();

    return false;
  } else {
    // Set field background to green
    theField.style.background = "#CCFFCC";

    // Remove error message
    theError.style.display = "none";

    return true;
  }
}
