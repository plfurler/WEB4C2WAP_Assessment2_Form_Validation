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

function changeState() {
  // store a reference to country and state select lists
  var country = document.getElementById("country").value;
  var state = document.getElementById("state");

  // if country selected is Australia
  // populate state select list with Australian states
  if (country === "AU") {
    state.innerHTML = "";

    state.options[state.options.length] = new Option("-- select state --", "0");
    state.options[state.options.length] = new Option("South Australia", "SA");
    state.options[state.options.length] = new Option("New South Wales", "NSW");
    state.options[state.options.length] = new Option("Victoria", "VIC");
    state.options[state.options.length] = new Option("Queensland", "QLD");
    state.options[state.options.length] = new Option("Tasmania", "TAS");
    state.options[state.options.length] = new Option("Western Australia", "WA");
    state.options[state.options.length] = new Option(
      "Australian Capital Territory",
      "ACT"
    );
    state.options[state.options.length] = new Option(
      "Northern Territory",
      "NT"
    );
  }

  // if country selected is New Zealand
  // populate state select list with New Zealand regions
  if (country === "NZ") {
    state.innerHTML = ""; // Clear existing options

    state.options[state.options.length] = new Option(
      "-- select region --",
      "0"
    );
    state.options[state.options.length] = new Option("Auckland", "AUK");
    state.options[state.options.length] = new Option("Wellington", "WGN");
    state.options[state.options.length] = new Option("Canterbury", "CAN");
    state.options[state.options.length] = new Option("Otago", "OTA");
    // Add more regions as needed
  }
}
