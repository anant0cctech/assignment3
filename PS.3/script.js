/**
 * Write a program to accept an integer N and generate an integer M which is formed by reversing the digits of N.
 * Please note N can have maximum 5 digits.
 * Print the numbers N and M. Compare N with M and print the result.
 */

const getInput = () => {
  const input = prompt('Enter digits to reverse them');
  if (input && input.length <= 5) {
    return input;
  } else if (input === null) {
    return;
  } else if (input.length === 0) {
    main();
  } else {
    console.log(input);
    alert('You can enter maximum 5 digits');
    confirm("Let's try again!") && main();
  }
};

const reverseMyDigits = (digits) => {
  let reverseDigits = '';
  for (let i = digits.length; i >= 0; i--) {
    reverseDigits += digits[i];
  }
  return reverseDigits;
};

const main = () => {
  const digits = getInput();

  const reverseDigits = reverseMyDigits(digits).substring(9);
  let reverseString = '';

  if (reverseDigits > digits) {
    reverseString = `Reverse digits are greater then entered digits.`;
  } else {
    reverseString = `Reverse digits are smaller then entered digits.`;
  }

  alert(`Reverse of entered digit is ${reverseDigits}\n${reverseString}`);
  confirm('Do you want to try again?') && main();
};

main();
