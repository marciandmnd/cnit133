const resultOne = $('#resultOne');
const resultTwo = $('#resultTwo');

const resultThree = $('#resultThree');
const resultFour = $('#resultFour');

$(document).ready(() => {
    $( "#draggable" ).draggable();
    var productOne = 1;
    var sumOne = 0;

    for(var i = 5; i <= 25; i += 4 ) {
        productOne *= i;
        sumOne += i;
    }
    resultOne.html(productOne.toLocaleString());
    resultTwo.html(sumOne);

    var productTwo = 1;
    var sumTwo = 0;

    for(var i = 3; i <= 18; i += 3 ) {
        productTwo *= i;
        sumTwo += i;
    }
    resultThree.html(productTwo.toLocaleString());
    resultFour.html(sumTwo);
});