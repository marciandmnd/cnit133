const results = $('#results');
const continuePlaying = $('#continue-playing');
const yesButton = $('#yes');
const noButton = $('#no');
const submitButton = $('#submit');
const answerInput = $('input[name="answer"]');

var num1, num2;

$(document).ready(function () {

    [num1, num2] = generateQuestion();

    // Select the form by its ID
    $('#answer-form').on('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
        var answer = answerInput.val();
        var parsedInteger = parseInt(answer, 10);
        if (parsedInteger === (num1 * num2)) {
            results.html('<span class="green">Very good!</span>');
            continuePlaying.show();
            submitButton.prop('disabled', true); 
            answerInput.prop('disabled', true); 
        } else {    
            results.html('<span class="red">No. Please try again.</span>');
        }
    });

    submitButton.on('click', (e) => {
        
    });

    yesButton.on('click', (e) => {
        continuePlaying.hide();
        results.html('')
        answerInput.val('');
        submitButton.prop('disabled', false); 
        answerInput.prop('disabled', false); 
        generateQuestion();
    })

    noButton.on('click', (e) => {
        results.html('Thanks for playing, see you next time 😊');
        continuePlaying.hide();
    });
});

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);

    $('#num1').html(num1);
    $('#num2').html(num2);
    return [num1, num2];
}