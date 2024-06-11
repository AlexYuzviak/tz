$(document).ready(function () {

//-- button scroll to top
var btn = $('#button-up');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

//-- close/open mobile menu
$('.header__burger').click(function(e){
    if($('.header__burger').hasClass('active')){
        $('.header__burger, .header__mobile__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    else{
        $('.header__burger, .header__mobile__menu').addClass('active');
        $('body').addClass('lock');
    }
});

//-- closing the mobile menu when clicking on an area outside of it + IOS
$(document).on('mousedown touchstart',function (e){ // tracking the click event on a web document
    var blockmobmenu = $('.header__mobile__menu.active'); // we define the element to which we will apply the conditions (we can specify ID, class or any other element identifier)
    if (!blockmobmenu.is(e.target) && (blockmobmenu.length > 0) // checking the condition if the click was not on our block
        && blockmobmenu.has(e.target).length === 0
        && e.target.id != 'header__burger'){
        $('.header__burger, .header__mobile__menu').removeClass('active');
        $('body').removeClass('lock');
        // if the conditions are met, hide our element
    }
});

//-- inicialization WOW
new WOW().init();

//-- select
$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
});

});
