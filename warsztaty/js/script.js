'use strict';

$(function () {
    let firstName = $('#first-name');
    let lastName = $('#last-name');
    let streetName = $('#street-number');
    let homeNumber = $('#home-number');
    let cityName = $('#city-name');
    let postNumber = $('#post-number');
    let selectedPizza = $('#select-pizza');
    let orderCost = $('#koszt-pizzy');
    let isPomidorowy = $('#czy-pomidorowy');
    let isCzosnkowy = $('#czy-czosnkowy');
    let isRodo = $('#rodo-check');
    let errorBox = $('#error-box');

    let priceTable = [
        {'id': '1', 'price': '18,00 PLN'},
        {'id': '2', 'price': '20,00 PLN'},
        {'id': '3', 'price': '22,00 PLN'},
        {'id': '4', 'price': '24,00 PLN'},
        {'id': '5', 'price': '26,00 PLN'}
    ]

    selectedPizza.change(function() {
        for (let item of priceTable) {
            if($(this).val() === item.id) {
                orderCost.text(item.price);
                break;
            }
        }
    });

    $('#pizza-order').submit(function() {
        errorBox.empty();
        let alertsArray = [];

        if($.trim(firstName.val()) === '') {
            alertsArray.push('Imię');
        };
    
        if($.trim(lastName.val()) === '') {
            alertsArray.push('Nazwisko');
        };
    
        if($.trim(streetName.val()) === '') {
            alertsArray.push('Ulica');
        };

        if($.trim(homeNumber.val()) === '') {
            alertsArray.push('Mieszkanie');
        };

        if($.trim(cityName.val()) === '') {
            alertsArray.push('Miasto');
        };

        if($.trim(postNumber.val()) === '') {
            alertsArray.push('Kod pocztowy');
        };

        if(selectedPizza.val() === null) {
            alertsArray.push('Pizza');
        };

        if(!isRodo.is(":checked")) {
            alertsArray.push('Rodo');
        };

        if (alertsArray.length > 0) {
            alertsArray.forEach(e => {
                errorBox.append(`<li>${e}</li>`);
            });
            event.preventDefault();
            return false;
        }

        let orderInfo = {
            firstName: $.trim(firstName.val()),
            lastName: $.trim(lastName.val()),
            streetName: $.trim(streetName.val()),
            homeNumber: $.trim(homeNumber.val()),
            cityName: $.trim(cityName.val()),
            postNumber: $.trim(postNumber.val()),
            selectedPizza: $.trim(selectedPizza.val()),
            sauce: {
                isPomidorowy: isPomidorowy.is(':checked'),
                isCzosnkowy: isPomidorowy.is(':checked')
            }
        }
        console.log(orderInfo);
    });
});