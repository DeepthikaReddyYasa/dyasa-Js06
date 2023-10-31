function validateForm() {
    var selection = document.getElementById("state");
    if (selection.value === "") {
        selection.setCustomValidity("Choose a State");
        return false;
    }

    var checkbox = document.getElementById("agree");
    if (!checkbox.checked) {
        checkbox.setCustomValidity("Please agree the terms/conditions");
        return false;
    }

    var option1 = document.getElementById("m-basic");
    var option2 = document.getElementById("m-premium");
    var option3 = document.getElementById("m-vip");

    if (!option1.checked && !option2.checked && !option3.checked) {
        var errorMessage = "Select a membership";
        option1.setCustomValidity(errorMessage);
        option2.setCustomValidity(errorMessage);
        option3.setCustomValidity(errorMessage);
        return false;
    }
    return true;
}

// Reset the custom validity message when the user interacts with the select field
document.getElementById("state").addEventListener("input", function (event) {
    event.target.setCustomValidity("");
});

// Reset the custom validity message when the user interacts with the checkbox field
document.getElementById("agree").addEventListener("click", function (event) {
    event.target.setCustomValidity("");
});

// Reset the custom validity message when the user interacts with the radio fields
var radioFields = document.querySelectorAll('input[type=radio]');
radioFields.forEach(function (field) {
    field.addEventListener("click", function () {
        radioFields.forEach(function (field) {
            field.setCustomValidity("");
        });
    });
});