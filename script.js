try {
    var num1 = parseFloat(prompt("Enter the first number: "));
    if (typeof num1 !== 'number' || Number.isNaN(num1)) throw "Enter a valid number";
    var num2 = parseFloat(prompt("Enter the second number: "));
    if (typeof num2 !== 'number' || Number.isNaN(num2)) throw "Enter a valid number";
    var operator = prompt("Enter an operator (+, -, *, /, %): ");
    switch (operator) {
        case '+':
            result = num1 + num2;
            alert(`${num1} + ${num2} = ${result}`)
            break
        case '-':
            result = num1 - num2;
            alert(`${num1} - ${num2} = ${result}`)
            break
        case '*':
            result = num1 * num2;
            alert(`${num1} * ${num2} = ${result}`)
            break
        case '/':
            result = num1 / num2;
            alert(`${num1} / ${num2} = ${result}`)
            break
        case '%':
            result = num1 % num2;
            alert(`${num1} % ${num2} = ${result}`)
            break
        
        default:
            alert('Invalid operator');
            break;
    }

} 
catch (error) {
    alert(error);
}
