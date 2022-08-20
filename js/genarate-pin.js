function getPin() {
    const pin = genarateRamdom();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}



function genarateRamdom() {
    const genaratePin = Math.round(Math.random() * 10000);
    return genaratePin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
            // console.log('its working');
        }
        else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }

    else {

        const newTypedNumber = previousNumber + number
        typeNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displyPin = document.getElementById('display-pin');
    const displayedPin = displyPin.value;

    const typedNumber = document.getElementById('typed-numbers');
    const inputPin = typedNumber.value;

    let message = document.getElementById('pin-success');
    let warring = document.getElementById('pin-failure')
    if (displayedPin === inputPin) {
        message.style.display = 'block';
        warring.style.display = 'none';
        // console.log('its working');
    }
    else {
        warring.style.display = 'block';
        message.style.display = 'none';
    }
})