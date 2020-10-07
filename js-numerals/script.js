const inputElemenent = document.querySelector('#number');
const resultElement = document.querySelector('#result');
const errorElement = document.querySelector('#error');

function onButtonClicked() {
    showError('')
    try {
        const inputText = inputElemenent.value
        checkInput(inputText);

        resultElement.innerHTML = inputText;
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

function showError(errorMessage) {
    errorElement.innerHTML = `${errorMessage}`
}