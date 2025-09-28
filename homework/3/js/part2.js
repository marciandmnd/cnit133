$(document).ready(() => {
    $("#sellerName").tooltip();

    $("#seller-earning-form").validate({
        ignoreTitle: true,
        rules: {
            "seller-name": {
                required: true
            },
            "item-1": {
                required: true,
                digits: true,
                range: [0, 100]
            },
            "item-2": {
                required: true,
                digits: true,
                range: [0, 100]
            },
            "item-3": {
                required: true,
                digits: true,
                range: [0, 100]
            },
            "item-4": {
                required: true,
                digits: true,
                range: [0, 100]
            },

        },
        submitHandler: (form) => submitHandler(form)
    });

    $('#btn-reset-form').on('click', (e) => {
        $("#seller-earning-form").validate().resetForm();
    });

    function submitHandler(form) {

        const item1Price = 20.99;
        const item2Price = 12.75;
        const item3Price = 9.95;
        const item4Price = 35.89;

        const item1QtySold = +form.elements['item-1'].value;
        const item2QtySold = +form.elements['item-2'].value;
        const item3QtySold = +form.elements['item-3'].value;
        const item4QtySold = +form.elements['item-4'].value;

        const item1Total = (item1QtySold * item1Price).toFixed(2);
        const item2Total = (item2QtySold * item2Price).toFixed(2);
        const item3Total = (item3QtySold * item3Price).toFixed(2);
        const item4Total = (item4QtySold * item4Price).toFixed(2);


        const totalAmountSold = (+item1Total + +item2Total + +item3Total + +item4Total).toFixed(2);
        const totalWeeklyEarnings = (250 + (0.9 * totalAmountSold)).toFixed(2);

        $('#item-1-qty-sold').val(item1QtySold);
        $('#item-1-total').val(item1Total);

        $('#item-2-qty-sold').val(item2QtySold);
        $('#item-2-total').val(item2Total);

        $('#item-3-qty-sold').val(item3QtySold);
        $('#item-3-total').val(item3Total);

        $('#item-4-qty-sold').val(item4QtySold);
        $('#item-4-total').val(item4Total);

        $('#total-amount-sold').val(totalAmountSold);
        $('#total-weekly-earnings').val(totalWeeklyEarnings);
    }
});