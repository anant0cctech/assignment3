/**
 * Write a program to accept 5 digit integer N and calculate the sum of its first and fifth digit.
 */

const getInput = () => {
  const input = prompt('Enter digits to calculate sum first & last digit');
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
  return (
    parseInt(digits.charAt(0)) + parseInt(digits.charAt(digits.length - 1))
  );
};

const main = () => {
  const digits = getInput();

  alert(`Sum of first & fifth digit is ${sumOfDigits(digits)}`);
  confirm('Do you want to try again?') && main();
};

main();
