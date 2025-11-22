
var navItem = $('.nav-item');

navItem.on('mouseover', (e) => {
    $item = $(e.currentTarget);
    $item.find('.dropdown-menu').css('display', 'block');
});

navItem.on('mouseout', (e) => {
    $item = $(e.currentTarget);
    $item.find('.dropdown-menu').css('display', 'none');
});