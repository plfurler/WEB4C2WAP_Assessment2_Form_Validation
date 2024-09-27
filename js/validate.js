/* 
Pseudocode: Simplified code-like language used to outline the logic and structure of a program without specific syntax.

Flow Charts: Diagrams that represent the flow of a program or algorithm using shapes and arrows to show steps and decisions.

Internal Comments: Annotations within the code that describe its functionality, helping developers understand logic and purpose.
*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                      FORM VALIDATION
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function validate() {
  var elements = document.getElementById("form1").elements;

  for (var i = 0, element; (element = elements[i++]); ) {
    if (
      (element == "[object HTMLInputElement]" ||
        element == "[object HTMLSelectElement]") &&
      element.style.backgroundColor != "rgb(204, 255, 204)"
    ) {
      if (element.type != "color" && element.type != "submit" && element.id != "colour") {
        alert("Please enter data for any fields that are not green");
        return false;
      }
    }
  }

  if (document.getElementById("colour").value != "#000000") {
    alert("Please select the correct colour for black from the colour picker");
    document.getElementById("colour").focus();
    return false;
  }
}

function validateErrors(formField, errorField) {
  theField = document.getElementById(formField);
  theError = document.getElementById(errorField);
  var thePattern = new RegExp("^" + theField.pattern + "$");

  if (!thePattern.test(theField.value)) {
    theField.style.background = "#FF9999";
    theError.style.display = "block";
    theError.innerHTML = theField.title;
    theField.focus();
    return false;
  } else {
    theField.style.background = "#CCFFCC";
    theError.style.display = "none";
    return true;
  }
}


/*
The function validatePostcode() validates the entered postcode against specific patterns based on the selected state.
It retrieves the 'state' and 'postcode' values from the form, then uses a switch statement to determine the correct 
regular expression (RegExp) for the state's postcode format. The switch statement is used to efficiently handle multiple 
state cases by checking each 'state' value (e.g., NSW, VIC) and applying a unique postcode validation rule for each.

For instance, NSW and ACT postcodes should start with a '2', so a RegExp pattern like /^[2][0-9]{3}$/ is assigned. 
For other states, the first digit of the postcode changes based on the specific state's postal code range. 
The switch also sets a custom error message based on the state, which informs the user of the correct format if validation fails.

If the postcode does not match the assigned pattern, an error message is displayed, and the input field's background changes 
to indicate the error. The switch statement is ideal here as it provides a clear and readable way to handle the different 
state-specific postcode formats, which differ only in the first digit. It is best practice to use a switch statement when testing
for multiple conditions based on the same value, as it provides clearer and more efficient code compared to using multiple
if-else statements.
*/
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
      errorMessage = "Postcode should start with 3 for VIC.";
      break;
    case "QLD":
      postcodeRegExp = /^[4][0-9]{3}$/;
      errorMessage = "Postcode should start with 4 for QLD.";
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
    postcodeInput.style.backgroundColor = "#FF9999";
    postcodeInput.focus();
    return false;
  } else {
    postcodeError.style.display = "none";
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

  // check if country select list has selected a country
  if (document.getElementById("country").value == "0") {
    document.getElementById("country").style.background = "#FF9999";
  } else {
    document.getElementById("country").style.background = "#CCFFCC";
  }
}

function stateColours() {
  if (document.getElementById("state").value == "0") {
    document.getElementById("state").style.background = "#FF9999";
  } else {
    document.getElementById("state").style.background = "#CCFFCC";
  }
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                        LOCAL STORAGE
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Local storage is utilized in this application to persist user input data across browser sessions. The saveData() function is responsible for capturing the values entered by the user in various form fields (e.g., username, name, address) and storing them in the browser's local storage using the localStorage.setItem() method. This function is invoked automatically every 5000 milliseconds (5 seconds) through the setInterval() method, ensuring that data is continually saved as the user interacts with the form.

The retrieveData() function is called when the page loads, as specified in the body tag with the onload attribute (onload="retrieveData()"). This function retrieves the previously saved values from local storage using the localStorage.getItem() method and populates the corresponding input fields with these values. If there are no stored values, it defaults the fields to an empty string. This implementation ensures a seamless user experience, allowing users to resume their input even after a page refresh or subsequent visits, thereby enhancing the usability of the application.
*/

var myInterval = setInterval(saveData, 5000);

function saveData() {
  let usernameValue = document.querySelector("#username").value;
  let nameValue = document.querySelector("#name").value;
  let addressValue = document.querySelector("#address").value;
  let suburbValue = document.querySelector("#suburb").value;
  let cityValue = document.querySelector("#city").value;
  let countryValue = document.querySelector("#country").value;
  let stateValue = document.querySelector("#state").value;
  let postcodeValue = document.querySelector("#postcode").value;
  let emailValue = document.querySelector("#email").value;
  let phoneValue = document.querySelector("#phone").value;
  let websiteValue = document.querySelector("#website").value;
  let ageValue = document.querySelector("#age").value;
  let colourValue = document.querySelector("#colour").value;

  localStorage.setItem("username", usernameValue);
  localStorage.setItem("name", nameValue);
  localStorage.setItem("address", addressValue);
  localStorage.setItem("suburb", suburbValue);
  localStorage.setItem("city", cityValue);
  localStorage.setItem("country", countryValue);
  localStorage.setItem("state", stateValue);
  localStorage.setItem("postcode", postcodeValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("phone", phoneValue);
  localStorage.setItem("website", websiteValue);
  localStorage.setItem("age", ageValue);
  localStorage.setItem("colour", colourValue);
}

function retrieveData() {
  let usernameValue = localStorage.getItem("username");
  let nameValue = localStorage.getItem("name");
  let addressValue = localStorage.getItem("address");
  let suburbValue = localStorage.getItem("suburb");
  let cityValue = localStorage.getItem("city");
  let countryValue = localStorage.getItem("country");
  let stateValue = localStorage.getItem("state");
  let postcodeValue = localStorage.getItem("postcode");
  let emailValue = localStorage.getItem("email");
  let phoneValue = localStorage.getItem("phone");
  let websiteValue = localStorage.getItem("website");
  let ageValue = localStorage.getItem("age");
  let colourValue = localStorage.getItem("colour");

  document.querySelector("#username").value = usernameValue || "";
  document.querySelector("#name").value = nameValue || "";
  document.querySelector("#address").value = addressValue || "";
  document.querySelector("#suburb").value = suburbValue || "";
  document.querySelector("#city").value = cityValue || "";
  document.querySelector("#country").value = countryValue || "";
  document.querySelector("#postcode").value = postcodeValue || "";
  document.querySelector("#email").value = emailValue || "";
  document.querySelector("#phone").value = phoneValue || "";
  document.querySelector("#website").value = websiteValue || "";
  document.querySelector("#age").value = ageValue || "";
  document.querySelector("#colour").value = colourValue || "#ffffff";

  if (usernameValue) validateErrors("username", "usernameError");
  if (nameValue) validateErrors("name", "nameError");
  if (addressValue) validateErrors("address", "addressError");
  if (suburbValue) validateErrors("suburb", "suburbError");
  if (cityValue) validateErrors("city", "cityError");
  if (countryValue) {
    document.querySelector("#country").value = countryValue;
    changeState();

    if (stateValue) {
      document.querySelector("#state").value = stateValue;
    }

    stateColours();
  }
  if (postcodeValue) validatePostcode();
  if (emailValue) validateErrors("email", "emailError");
  if (phoneValue) validateErrors("phone", "phoneError");
  if (websiteValue) validateErrors("website", "websiteError");
  if (ageValue) validateErrors("age", "ageError");
}
