function validate() {
  // Gets all of the elements in the form with id="form1"
  // You will need to change this to match your form's id
  var elements = document.getElementById("form1").elements;

  // Loops through all of the elements in the form
  for (var i = 0, element; (element = elements[i++]); ) {
    // Checks if the element in the form is either <input> or <select>
    // and if the background color is not green (RGB value used here)
    if (
      (element == "[object HTMLInputElement]" ||
        element == "[object HTMLSelectElement]") &&
      element.style.backgroundColor != "rgb(204, 255, 204)"
    ) {
      // If input is not a color picker or submit button
      if (element.type != "color" && element.type != "submit") {
        alert("Please enter data for any fields that are not green");
        return false;
      }
    }
  }

  // To test the color picker (Hex value used here)
  // You will need to edit the id below to match yours
  if (
    document.getElementById("colour").value !=
    "#000000"
  ) {
    alert("Please select a colour from the colour picker");
    document.getElementById("colour").focus();
    return false;
  }
}

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

function validatePostcode() {
  var state = document.getElementById("state").value;
  var postcode = document.getElementById("postcode").value;
  var postcodeError = document.getElementById("postcodeError");
  var postcodeInput = document.getElementById("postcode");
  var postcodeRegExp;
  var errorMessage = "";

  switch (state) {
    case "NSW":
    case "ACT":
      postcodeRegExp = /^[2][0-9]{3}$/;
      errorMessage = "Postcode should start with 2 for NSW and ACT.";
      break;
    case "VIC":
      postcodeRegExp = /^[3][0-9]{3}$/;
      errorMessage = "Postcode should start with 3 or 4 for VIC.";
      break;
    case "QLD":
      postcodeRegExp = /^[4][0-9]{3}$/;
      errorMessage = "Postcode should start with 4 to 9 for QLD.";
      break;
    case "SA":
      postcodeRegExp = /^[5][0-9]{3}$/;
      errorMessage = "Postcode should start with 5 for SA.";
      break;
    case "WA":
      postcodeRegExp = /^[6][0-9]{3}$/;
      errorMessage = "Postcode should start with 6 for WA.";
      break;
    case "TAS":
      postcodeRegExp = /^[7][0-9]{3}$/;
      errorMessage = "Postcode should start with 7 for TAS.";
      break;
    case "NT":
      postcodeRegExp = /^[0][0-9]{3}$/;
      errorMessage = "Postcode should start with 0 for NT.";
      break;
    default:
      postcodeRegExp = /^[0-9]{4}$/;
      errorMessage = "Please enter a valid postcode.";
  }

  if (!postcodeRegExp.test(postcode)) {
    postcodeError.style.display = "block";
    postcodeError.textContent = postcodeInput.title;
    postcodeError.textContent += errorMessage;
    // Set field background to red
    postcodeInput.style.backgroundColor = "#FF9999";
    postcodeInput.focus();
    return false;
  } else {
    postcodeError.style.display = "none";
    // Set field background to green
    postcodeInput.style.backgroundColor = "#CCFFCC";
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
  else if (country === "NZ") {
    state.innerHTML = "";
    state.options[state.options.length] = new Option(
      "-- select region --",
      "0"
    );
    state.options[state.options.length] = new Option("Auckland", "AU");
    state.options[state.options.length] = new Option("Canterbury", "CA");
    state.options[state.options.length] = new Option("Wellington", "WE");
    state.options[state.options.length] = new Option("Waikato", "WK");
    state.options[state.options.length] = new Option("Bay of Plenty", "BP");
    state.options[state.options.length] = new Option(
      "Manawatū-Whanganui",
      "MW"
    );
    state.options[state.options.length] = new Option("Otago", "OT");
    state.options[state.options.length] = new Option("Northland", "NL");
    state.options[state.options.length] = new Option("Hawke's Bay", "HB");
    state.options[state.options.length] = new Option("Taranaki", "TK");
    state.options[state.options.length] = new Option("Southland", "SL");
  }
  // if no country selected populate state select list
  // with one option that tells user to select country first
  else {
    state.innerHTML = "";
    state.options[state.options.length] = new Option(
      "-- select country first --",
      ""
    );
  }

  // Change background color of country select element
  if (document.getElementById("country").value == "0") {
    document.getElementById("country").style.background = "#FF9999";
  } else {
    document.getElementById("country").style.background = "#CCFFCC";
  }
}

// Call this function using an onchange event on your state select
// Add the same if statement into the end of function changeState()
// and change the id from your state select to your country select
function stateColours() {
  if (document.getElementById("state").value == "0") {
    document.getElementById("state").style.background = "#FF9999";
  } else {
    document.getElementById("state").style.background = "#CCFFCC";
  }
}
