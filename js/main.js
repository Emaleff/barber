$(document).ready(() => {
    'use strict'

    $('#masters__action').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '0',
        variableWidth: true,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    arrows: true,
                    dots: true,
                    variableWidth: true,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(function () {
        $("#datepicker").datepicker();
        $("#anim").on("change", function () {
            $("#datepicker").datepicker("option", "showAnim", $(this).val());
        });
    });


    let name = $('#name-input');
    let phone = $('#phone-input');
    let service = $('#service-input');
    let barber = $('#barber-input');
    let data = $('#datepicker');
    let time = $('#time-input');

    name.keypress(function (event) {
        let number = parseInt(event.key);
        if (number) {
            event.preventDefault();
        }
    });

    phone.keypress(function (event) {
        let number = parseInt(event.key);
        if (!number) {
            event.preventDefault();
        }
    });

    $('#btn-action').click(function () {
        let nameError = $('#name-error');
        let phoneError = $('#phone-error');
        let serviceError = $('#service-error');
        let barberError = $('#barber-error');
        let dataError = $('#data-error');
        let timeError = $('#time-error');

        serviceError.hide();
        service.css('borderColor', 'rgb(174, 137, 89)');

        barberError.hide();
        barber.css('borderColor', 'rgb(174, 137, 89)');

        nameError.hide();
        name.css('borderColor', 'rgb(174, 137, 89)');

        phoneError.hide();
        phone.css('borderColor', 'rgb(174, 137, 89)');

        dataError.hide();
        data.css('borderColor', 'rgb(174, 137, 89)');

        timeError.hide();
        time.css('borderColor', 'rgb(174, 137, 89)');

        if (time.val() === '') {
            time.css('borderColor', '#f00');
            time.css('borderWidth', '1px');
            timeError.css('display', 'block')
        }
        if (data.val() === '') {
            data.css('borderColor', '#f00');
            data.css('borderWidth', '1px');
            dataError.css('display', 'block')
        }
        if (name.val() === '') {
            name.css('borderColor', '#f00');
            name.css('borderWidth', '1px');
            nameError.css('display', 'block')
        }
        if (phone.val() === '') {
            phone.css('borderColor', '#f00');
            phone.css('borderWidth', '1px');
            phoneError.css('display', 'block')
        }
        if (service.val() === null) {
            service.css('borderColor', '#f00');
            service.css('borderWidth', '1px');
            serviceError.css('display', 'block')
        }
        if (barber.val() === null) {
            barber.css('borderColor', '#f00');
            barber.css('borderWidth', '1px');
            barberError.css('display', 'block')
        }


        if (time.val() && data.val() && name.val() && phone.val && barber.val() !== null && service.val() !== null) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&service=' + service.val() + '&data=' + data.val() + '&phone='
                    + phone.val() + '&barber=' + barber.val() + '&time=' + time.val(),
                success: () => {
                    $('#popup-bg2').show();
                    $('#popup-bg1').hide();
                },
                error: () => {
                    $('#popup-bg1').hide();
                    alert('Ошибка бронирования. Свяжитесь пожалуйста по номеру телефона');
                }
            })
        }
    });

    $('.open-popup').click(() => {
        $('.popup-bg').css('display', 'flex');
    });

    $('#popup-close1, .popup-bg').click((e) => {
        if (e.target.id === 'popup-close1' || e.target.id === 'popup-bg1') {
            $('#popup-bg1').hide();
        }
    });
    $('#popup-close2, .popup-bg').click((e) => {
        if (e.target.id === 'popup-close2' || e.target.id === 'popup-bg1') {
            $('#popup-bg2').hide();
        }
    });


    const discount =$('#popup-discount');
    $('#open-discount').click(() => {
        discount.css('display', 'flex');


       discount.click(()=>{
           discount.hide();
       });
    });
    new WOW({
        animateClass: "animate__animated"
    }).init();

    $('.parallax-window').parallax({imageSrc: '../images/parallax.png'});

});
