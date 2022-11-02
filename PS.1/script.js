/**
 * Write a program to accept an integer N and calculate the sum of its digits.
 * Please note N can have maximum 5 digits.
 */

const getInput = () => {
  const input = prompt('Enter digits to calculate sum');
  if (input && input.length <= 5) {
    return input;
  } else if (input === null) {
    return;
  } else if (input.length === 0) {
    main();
  } else {
    alert('You can enter maximum 5 digits');
    confirm("Let's try again!") && main();
  }
};

const sumOfDigits = (digits) => {
  let sum = 0;
  for (const digit of digits) {
    sum += parseInt(digit);
  }
  return sum;
};

const main = () => {
  const digits = getInput();

  if (digits) {
    alert(`Sum of entered digit is ${sumOfDigits(digits)}`);
    confirm('Do you want to try again?') && main();
  }
};

main();
