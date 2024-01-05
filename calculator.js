function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    const displayValue = document.getElementById('display').value;
  
    try {
      const result = eval(displayValue);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function convertToBinary() {
    const decimalValue = parseFloat(document.getElementById('display').value);
  
    if (!isNaN(decimalValue)) {
      const binaryValue = decimalValue.toString(2);
      document.getElementById('display').value = binaryValue;
    } else {
      document.getElementById('display').value = 'Invalid input';
    }
  }
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    const displayValue = document.getElementById('display').value;
  
    try {
      const result = eval(displayValue);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function convertToBinary() {
    const decimalValue = parseFloat(document.getElementById('display').value);
  
    if (!isNaN(decimalValue)) {
      const binaryValue = decimalValue.toString(2);
      document.getElementById('display').value = binaryValue;
    } else {
      document.getElementById('display').value = 'Invalid input';
    }
  }
  
  function convertToDecimal() {
    const binaryValue = document.getElementById('display').value;
  
    try {
      const decimalValue = parseInt(binaryValue, 2);
      document.getElementById('display').value = decimalValue;
    } catch (error) {
      document.getElementById('display').value = 'Invalid binary input';
    }
  }
    