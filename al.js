function calculateSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = Number(num1) + Number(num2);
    document.getElementById('sum').innerHTML = 'Addition = ' + sum;
}
function calculateMul() {
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var mul = Number(num3) * Number(num4);
    document.getElementById('mul').innerHTML = 'Multiplication = ' + mul;
}