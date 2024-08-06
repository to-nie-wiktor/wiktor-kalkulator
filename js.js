document.addEventListener('DOMContentLoaded', function() {
    const ekran = document.getElementById('ekran');
    const buttons = document.querySelectorAll('.buttonNumber');
  
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.id;
  
        if (value >= '0' && value <= '9') {
          if (currentInput === '0') {
            currentInput = value;
          } else {
            currentInput += value;
          }
          ekran.textContent = currentInput;
        } else if (value === 'clear') {
          currentInput = '0';
          previousInput = '';
          operation = null;
          ekran.textContent = currentInput;
        } else if (value === '+' || value === '-' || value === 'X' || value === '/') {
          previousInput = currentInput;
          currentInput = '';
          operation = value;
          ekran.textContent = '0';
        } else if (value === '=') {
          if (operation && previousInput !== '') {
            const result = performOperation(parseFloat(previousInput), parseFloat(currentInput), operation);
            ekran.textContent = result;
            currentInput = result.toString();
            previousInput = '';
            operation = null;
          }
        }
      });
    });
  
    function performOperation(a, b, operation) {
      switch (operation) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case 'X':
          return a * b;
        case '/':
          return a / b;
        default:
          return 0;
      }
    }
  });
  