
const form = document.querySelector('form');
const resultField = document.querySelector('#resultField');
const KOEFFICIENT = {
    USD: 36.6,
    EUR: 35.76,
    PLN: 7.47,
    UAH: 1
}

form.addEventListener('submit', submitHandler);

function submitHandler (event) {
    event.preventDefault();
    const {target: {amount: {value: amount}, 
            currencyInput: {value: currencyInput}, 
            currencyOutput: {value: currencyOutput}}} = event;
    if(Number.isNaN(Number(amount))) {
        resultField.textContent = 'Amount must be a number';
    } else {
        const res = amount * KOEFFICIENT[currencyInput] / KOEFFICIENT[currencyOutput]
        resultField.textContent = res.toFixed(2);
    }
}