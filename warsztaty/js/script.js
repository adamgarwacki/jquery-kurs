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
    console.log(isPomidorowy.val());
    let isCzosnkowy = $('#czy-czosnkowy');
    let isRodo = $('#rodo-check');

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
        event.preventDefault();

        let alertMessage = 'Brak wartości w następujących polach:';
        let alertChecker = false;

        if(firstName.val() === '') {
            alertMessage += ' Imię,';
            alertChecker = true;
        };
    
        if(lastName.val() === '') {
            alertMessage += ' Nazwisko,';
            alertChecker = true;
        };
    
        if(streetName.val() === '') {
            alertMessage += ' Ulica,';
            alertChecker = true;
        };

        if(homeNumber.val() === '') {
            alertMessage += ' Numer domu/mieszkania,';
            alertChecker = true;
        };

        if(cityName.val() === '') {
            alertMessage += ' Miasto,';
            alertChecker = true;
        };

        if(postNumber.val() === '') {
            alertMessage += ' Kod pocztowy,';
            alertChecker = true;
        };

        if(selectedPizza.val() === null) {
            alertMessage += ' Zamówienie,';
            alertChecker = true;
        };

        if(isRodo.prop("checked") == false) {
            alertMessage += ' Zgoda na przetwarzanie danych osobowych,';
            alertChecker = true;
        };

        let orderInfo = {
            "imie": "",
            "nazwisko": "",
            "ulica": "",
            "mieszkanie": "",
            "miasto": "",
            "kodpocztowy": "",
            "pizza": "",
            "pomidorowy": "",
            "czosnkowy": "",
            "rodo": "",
        }
        
        if(alertChecker) {
            alert(alertMessage);
        } else {
            orderInfo.imie = firstName.val();
            orderInfo.nazwisko = lastName.val();
            orderInfo.ulica = streetName.val();
            orderInfo.mieszkanie = homeNumber.val();
            orderInfo.miasto = cityName.val();
            orderInfo.kodpocztowy = postNumber.val();
            orderInfo.pizza = selectedPizza.val();
            orderInfo.pomidorowy = isPomidorowy.val();
            orderInfo.czosnkowy = isCzosnkowy.val();
            console.log(orderInfo);
        }
    });
});