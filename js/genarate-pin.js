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