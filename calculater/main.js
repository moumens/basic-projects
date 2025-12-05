const screenDisplay = document.querySelector('.screen');

const buttons = document.querySelectorAll('button');

let calculation = [];

let accumulativeCalculation = '';

function calculate (button) {
    
    const value = button.textContent;
    

    value === 'CLEAR' ? (calculation = [], screenDisplay.textContent = ".") : 
    value === '=' ?    (screenDisplay.textContent=eval(accumulativeCalculation)) : 
    (calculation.push(value), accumulativeCalculation = calculation.join(''), 
    screenDisplay.textContent=accumulativeCalculation);


    


}

buttons.forEach(button=>button.addEventListener('click', () => calculate(button)))