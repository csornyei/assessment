const inputElemenent = document.querySelector('#number');
const resultElement = document.querySelector('#result');
const errorElement = document.querySelector('#error');

function onButtonClicked() {
    showError('')
    try {
        const inputText = inputElemenent.value
        const parsedInput = checkInput(inputText);
        const convertedNumber = convertNumbers(parsedInput)
        resultElement.innerHTML = convertedNumber;
    } catch (error) {
        showError(error)
    }
}

function checkInput(input) {
    const parsed = Number(input);
    if (isNaN(parsed)) {
        throw new Error('Your input is not a valid number')
    }
    return parsed;
}

function convertNumbers(n) {
    const zeroToNineteen = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';

    let number = n;
    if (number >= 100) {
        const hundredsNumber = Math.floor(number / 100);
        console.log(hundredsNumber);
        number = number % 100;
        result = `${zeroToNineteen[hundredsNumber]} hundred`
    }
    if (number < 20) {
        result = `${result} ${zeroToNineteen[number]}`
    } else {
        const tensNumber = Math.floor(number / 10);
        const onesNumber = number - tensNumber * 10;
        result = `${result} ${tens[tensNumber]}-${zeroToNineteen[onesNumber]}`
    }
    return result;
}

function showError(errorMessage) {
    errorElement.innerHTML = `${errorMessage}`
}