const inputElemenent = document.querySelector('#number');
const resultElement = document.querySelector('#result');
const errorElement = document.querySelector('#error');

function onButtonClicked() {
    showError('')
    try {
        const inputText = inputElemenent.value
        let parsedInput = checkInput(inputText);
        if (parsedInput >= Math.pow(10, 12)) {
            resultElement.innerHTML ='Your number is too big.';
            return;
        }
        let convertedNumber = '';
        const billion = Math.pow(10, 9);
        console.log(`${parsedInput} >= ${billion}`, parsedInput >= billion);
        if (parsedInput >= billion) {
            convertedNumber = `${convertNumbers(Math.floor(parsedInput / billion))} Billions `;
            parsedInput = parsedInput % billion;
        }
        const million = Math.pow(10, 6);
        console.log(`${parsedInput} >= ${million}`, parsedInput >= million);
        if (parsedInput >= million) {
            convertedNumber = `${convertedNumber}${convertNumbers(Math.floor(parsedInput / million))} Millions `;
            parsedInput = parsedInput % million;
        }
        const thousand = Math.pow(10, 3);
        console.log(`${parsedInput} >= ${thousand}`, parsedInput >= thousand);
        if (parsedInput >= thousand) {
            convertedNumber = `${convertedNumber}${convertNumbers(Math.floor(parsedInput / thousand))} Thousands `;
            parsedInput = parsedInput % thousand;
        }
        convertedNumber = `${convertedNumber}${convertNumbers(parsedInput)}`;
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
    const zeroToNineteen = ['', 'One', 'Two', 'Three', 'Four',
        'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
        'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    let result = '';

    let number = n;
    if (number >= 100) {
        const hundredsNumber = Math.floor(number / 100);
        number = number % 100;
        result = `${zeroToNineteen[hundredsNumber]} Hundred`
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