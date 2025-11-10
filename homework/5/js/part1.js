const form = $('form');
const reset = $('#btnReset');
const results = $('#results');

form.on('submit', (e) => {
    e.preventDefault();
    validateForm();
});

reset.on('click', (e) => {
    results.html('');
});


const name = $('#name');
const radioButtons = $('input[name="age-group"]');
const checkboxes = $('input[name="browsers"]');
const selectElement = $('#movie-genre');

function validateForm() {
    let error = false;
    let message = "<p class='error'>Please fix the following: </p><ul>";

    // Validate input text box
    if (name.val().trim() === '') {
        error = true;
        message += '<li>Enter full name</li>';
    }

    // Validate radio buttons
    let radioChecked = false;
    for (const radio of radioButtons) {
        if (radio.checked) {
            radioChecked = true;
            break;
        }
    }

    if (!radioChecked) {
        error = true;
        message += '<li>Select age group</li>';
    }

    // Validate checkboxes
    let checkboxChecked = false;
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkboxChecked = true;
            break;
        }
    }
    if (!checkboxChecked) {
        error = true;
        message += '<li>Pick browsers you have used</li>';
    }

    // Validate select/datalist
    if (selectElement.val() == null) {
        error = true;
        message += '<li>Select movie genre</li>';

    }

    if (error == false) {     // If all validations pass
        message = "<p class='success'>Thanks, your data was submitted!</p>";
        form[0].reset();

    } else {
        message += "</ul>";
    }

    results.html(message);
}