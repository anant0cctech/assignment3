/**
 * Write a program to accept a 5 digit integer N and then generates a number M by adding 1 to each digit.
 */

const getInput = () => {
  const input = prompt('Enter digits to add 1 to each digits');
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

const addOneToDigit = (digits) => {
  let newDigits = '';
  for (const digit of digits) {
    newDigits += parseInt(digit) + 1;
  }
  return newDigits;
};

const main = () => {
  const digits = getInput();

  alert(`Increased each digit by one ${addOneToDigit(digits)}`);
  confirm('Do you want to try again?') && main();
};

main();
