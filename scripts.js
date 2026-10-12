javascript
//index
javascript
// 1. Change the main heading
function changeHeading() {
    document.getElementById("mainHeading").innerHTML =
        "Explore Our Amazing Events!";
}


// 2. Change the background colour of an event card
function changeCardColor() {
    document.getElementById("eventCard").style.backgroundColor =
        "lightblue";
}


// 3. Show or hide the event highlights section
function toggleHighlights() {
    let section = document.getElementById("highlights");

    if (section.style.display === "none") {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
}


// Register Student
function registerStudent() {

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;
    let email = document.getElementById("email").value;
    let event = document.getElementById("event").value;

    // Check if any field is empty
    if (name.trim() === "" ||
        roll.trim() === "" ||
        email.trim() === "" ||
        event === "") {

        document.getElementById("error").innerHTML =
            "Error: Please fill in all required fields.";

        document.getElementById("message").innerHTML = "";
    }
    else {

        document.getElementById("message").innerHTML =
            "Congratulations, " + name +
            "! You have successfully registered for " + event + ".";

        document.getElementById("error").innerHTML = "";
    }
}



function changeFontSize() {

    let heading = document.getElementById("heading");

    if (heading.style.fontSize === "40px") {
        heading.style.fontSize = "24px";
    }
    else {
        heading.style.fontSize = "40px";
    }
}



function toggleForm() {

    let form = document.getElementById("registrationForm");

    if (form.style.display === "none") {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
}

