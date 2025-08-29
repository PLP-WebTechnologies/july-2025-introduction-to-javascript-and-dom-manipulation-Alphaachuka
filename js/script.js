// function to check age
function checkAge() {
    let name = document.getElementById("nameInput").value.trim();
    let age = parseInt(document.getElementById("ageInput").value);
    let result = document.getElementById("result");

    console.log("Name:", name);
    console.log("Age:", age);

    if (!name) {
        result.innerText = "Please enter your name.";
    } else if (isNaN(age) || age <= 0) {
        result.innerText = "Please enter a valid age.";
    } else if (age >= 18) { 
        result.innerText = `✅ Hello ${name}, you can vote.`;
    } else {
        result.innerText = `❌ Hello ${name}, you are not old enough to vote.`;
    }
}

// function to reset the form

function clearInputs() {
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("result").innerText = "";
}

// loop example 1: display sample names on the page
function logSampleNames() {
    const names = ["Alpha", "Odour", "Kimani", "David"];
    const container = document.getElementById("nameOptionsContainer");

    const nameList = document.createElement("ul");
    nameList.style.marginTop = "10px";
    nameList.style.listStyleType = "square";

    for (let i = 0; i < names.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = `Sample Name: ${names[i]}`;
        nameList.appendChild(listItem);
    }

    container.appendChild(nameList);
}

// loop example 2: dynamically create and dispaly a list of voting ages
function displayVotingOptions() {
    const container = document.getElementById("ageOptionsContainer");
    const ageList = document.createElement("ul");
    for (let age = 18; age <= 22; age++) {
        const listItem = document.createElement("li");
        listItem.innerText = `Age ${age} - Eligible to vote`;
        ageList.appendChild(listItem);
    }
    container.appendChild(ageList);
}

// Call the function to display voting options on page load
window.onload = function() {
    logSampleNames();
    displayVotingOptions();
}
    