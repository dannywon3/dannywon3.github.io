function yeet() {
    // scriptHeading and scriptParagraph are whatever you want as well
    var scriptHeading = document.getElementById("username");

    var greetingElement = document.createElement("h1");
    var greetingText = document.createTextNode("THIS TEXT SHOULD WORK");
    greetingElement.appendChild(greetingText);

    if (scriptHeading == '' || scriptHeading == null) {

        scriptHeading.appendChild(greetingElement);
    }
}


// local storage i attempted

const Form_Details = document.querySelector('form');
const Submit_Button = document.querySelector('button');

Form_Details.addEventListener('submit', function () {
    const First_Name = document.getElementById('username').value;
    localStorage.setItem("Name", username);
});