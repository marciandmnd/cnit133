const decimalNumber = $('#decimalNumber');
const output = $('#output');
const regex = /^\d+\.\d{4,}$/;

$(document).ready(function () {
    $('form').on('submit', (e) => {
        const input = decimalNumber.val();
        // Prevent the default form submission behavior (page reload)
        e.preventDefault();

        // alert(decimalNumber.val());
        if (regex.test(input)) {
            // round the floating-point number to the nearest integer
            const a = Math.round(input);

            // square root of the floating-point number and round it to an integer
            const squareRoot = Math.sqrt(input);
            const b = Math.round(squareRoot);

            // round the floating-point number to the nearest tenths position
            const c = roundToNearestTenth(input);

            // round the floating-point number to the nearest hundredths position
            const d = roundToHundredths(input);

            // round the floating-point number to the nearest thousandths position
            const e = roundToThousandths(input);

            const result = `<p class="success">Results for ${input}:</p>
            <ol type="A">
                <li>Rounded to integer: ${a}</li>
                <li>Square root rounded to integer: ${b}</li>
                <li>Rounded to tenth: ${c}</li>
                <li>Rounded to hundredth: ${d}</li>
                <li>Rounded to thousandth: ${e}</li>
            </ol>`;
            output.html(result);
            
            // Proceed with further processing of the number
        } else {
             output.html('<p class="error">Error! Number must have at least 4 decimal places. e.g., 3.1214</p>');
        }
    });

    $('#clear').on('click', (e) => {
        output.html('');
    });
});

function roundToNearestTenth(number) {
  return Math.round(number * 10) / 10;
}

function roundToHundredths(number) {
  return Math.round(number * 100) / 100;
}

function roundToThousandths(num) {
  return Math.round(num * 1000) / 1000;
}