const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const piButton = document.querySelector('[data-number-pi]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

piButton.addEventListener('click', () => {
  calculator.currentOperand = '';
  calculator.appendNumber(Math.PI.toFixed(3));
  calculator.updateDisplay();
});

equalsButton.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
