// Generate pin
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin(); // calling the function again
    }
}

// display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    // NaN - Not A Number
    if (isNaN(digit)) {
        // handle backspace
        // handle clear
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;

    if (pin === typedPin) {
        displayMathResult('block', 'none');
    }
    else {
        displayMathResult('none', 'block');
    }
}
function displayMathResult(correctStatus, incorrectStatus){
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}
