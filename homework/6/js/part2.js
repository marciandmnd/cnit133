const pageSelect0 = $('#pageSelect0');
const pageSelect1 = $('#pageSelect1');

function navigateToURL(select) {
    const url = eval(select + ".val()");
    if (url !== "") {
        window.open(url, "_blank");
    }
}


$(document).ready(() => {


});