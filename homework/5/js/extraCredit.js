const input = $('#squareSizeInput');
const output = $('#squareOutput');

function drawHollowSquare() {
    const size = parseInt(input.val());

    // Validate input
    if (isNaN(size) || size < 2 || size > 10) {
        output.html("Please enter a valid number between 2 and 10.");
        return;
    }

    let square = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                square += "* ";
            } else {
                square += "  "; // Use a space for the hollow part
            }
        }
        square += "\n"; // New line for each row
    }
    output.html(square);
}