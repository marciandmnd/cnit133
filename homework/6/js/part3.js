const form = $('#phoneNumberForm');
const phone = $('#phone');
const regex = /^\(\d{1,3}\)\s?\d{1,3}-\d{1,4}$/;
const results = $('#results');
const clear = $('#clear');

$(document).ready(() => {
    form.on('submit', (e) => {
        e.preventDefault();

        const value = phone.val();
        if (regex.test(value)) {
            const message = "<p class='success'>Thank you for your phone number! One of our representatives will contact you shortly.</p>";
            results.html(message);
        } else {
            const message = "<p class='error'>Error! Incorrect format. Enter number like: <span class='bold'>(415) 123-1234</span></p>";
            results.html(message);
        }
    });

    clear.on('click', (e) => {
        results.html('');
    });
});

