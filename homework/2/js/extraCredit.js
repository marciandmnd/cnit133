// Exchange rates (6 September 2025) for 1 USD
const EURO = 0.85; // Euro
const CAD = 1.38; // Canadian Dollar
const HKD = 7.80; // Hong Kong Dollar
const JPY = 147.07;	// Japanese Yen
const MXN = 18.72; // Mexican Peso

/**
 * Calculates exchange rates and displays in DOM
 * @param {number} amount - Amount in USD
 */
function calculateExchangeRates(amount) {
    
    // Hide error message if no input is entered
    if(amount === '') {
        $('#error').hide();
        $('.rate').html('');
        return;
    }

    if(!isNumeric(amount)) {
        $('#error').show();
        $('.rate').html('')
    } else {
        $('#error').hide();
        const euro = (EURO * amount).toFixed(2);
        $('#euro').html(euro);

        const cad = (CAD * amount).toFixed(2);
        $('#cad').html(cad);

        const hkd = (HKD * amount).toFixed(2);
        $('#hkd').html(hkd);

        const jpy = (JPY * amount).toFixed(2);
        $('#jpy').html(jpy);

        const mxn = (MXN * amount).toFixed(2);
        $('#mxn').html(mxn);
    }
}

/**
 * Tests if string is numeric
 * @param {string} str - The string to test
 */
function isNumeric(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}

// jQuery code
$(document).ready(() => {

    // Toggle instructions
    $('#toggle-instructions').on('click', (e) => {
        $('#instructions').toggle();
    })

    // Calculate exchange rates
    $('input').on('input', (e) => {
        const amount = e.target.value;
        calculateExchangeRates(amount);
    });

    // Toggle input field background color on focus/blur
    $('input').focus(function() {
        $(this).css('background-color', 'lightblue');
    });

    $('input').blur(function() {
        $(this).css('background-color', '');
    });
});

