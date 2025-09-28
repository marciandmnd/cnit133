
$(document).ready(function () {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    const results = $('#results');

    $('#num1').html(num1);
    $('#num2').html(num2);


    // Select the form by its ID
    $('#answer-form').on('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
        var answer = $('input[name="answer"]').val();
        var parsedInteger = parseInt(answer, 10);

        if (parsedInteger === (num1 * num2)) {
            results.html('Very good!')
        } else {
            results.html('No. Please try again.');
        }
    });
});