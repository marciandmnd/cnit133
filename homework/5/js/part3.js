const states = [
    ["AL", "Alabama", "Montgomery", "4,903,185"],
    ["AK", "Alaska", "Juneau", "731,545"],
    ["AZ", "Arizona", "Phoenix", "7,278,717"],
    ["AR", "Arkansas", "Little Rock", "3,017,825"],
    ["CA", "California", "Sacramento", "39,512,223"],
    ["CO", "Colorado", "Denver", "5,758,736"]
];

const stateInput = $('#stateInput');


$('#stateForm').on('submit', (e) => {
    e.preventDefault();

    const input = stateInput.val().toLowerCase();
    var message = "<span class='error'>Sorry, we do not have information about this state!</span><br> We only have information about: Alabama (AL), Alaska (AK), Arizona (AZ), Arkansas (AR), California (CA), and Colorado (CO).";

    for(let i=0; i<states.length; i++) {
        for(let j=0; j<2; j++) {
            if(states[i][j].toLowerCase() === input ) {
                message = getMessage(i);
                $('#results').html(message);
                return;
            }
        }
        $('#results').html(message);
    }
});

$('#clear').on('click', (e) => {
    $('#results').html('');
});

function getMessage(index) {
    const state = states[index];
    const message = `<span class="success">Thanks for your inquiry, here is the information you requested:</span><br>
        State abbr = ${state[0]}<br>
        State Name = ${state[1]}<br>
        Capital = ${state[2]}<br>
        Population = ${state[3]}<br>`;
    return message;
}
