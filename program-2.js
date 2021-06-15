var n1 = 9;
var n2 = 3;
let operator = prompt("Please enter the operator");

switch (operator) {
    case '+':

        console.log("The value of n1 + n2 is " + (n1 + n2));
        break;

    case '-':
        console.log("The value of n1 - n2 is " + (n1 - n2));
        break;

    case '*':
        console.log("The value of n1 * n2 is " + (n1 * n2));
        break;

    case '/':
        console.log("The value of n1 / n2 is " + (n1 / n2));
        break;

    case '**':
        console.log("The value of n1 ** n2 is " + (n1 ** n2));
        break;

    case '++':
        console.log("The value of ++n1 is " + (++n1));
        break;

    case '--':
        console.log("The value of --n1 is " + (--n1));
        break;

    default:
        console.log("Wrong choice");
        break;
}