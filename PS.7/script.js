/**
 * 	Write a program to a accept a list of N integers.
 *  Find the largest and the smallest number in the list and their respective positions in the list.
 */

const getInput = () => {
  const inputList = prompt('Enter list of integers');
  if (inputList && inputList.length > 0) {
    return inputList.split(',');
  } else if (inputList === null) {
    return;
  } else if (inputList.length === 0) {
    main();
  } else {
    confirm("Let's try again!") && main();
  }
};

const findSmallestAndLargestNo = (digits) => {
  const largest = { number: 0, index: 0 };
  const smallest = { number: digits[0], index: 0 };
  digits.map((digit, index) => {
    if (parseInt(digit) > largest.number) {
      largest.number = digit;
      largest.index = index;
    }
    if (parseInt(digit) < smallest.number) {
      smallest.number = digit;
      smallest.index = index;
    }
  });
  return { largest, smallest };
};

const main = () => {
  const digits = getInput();
  const data = findSmallestAndLargestNo(digits);

  alert(
    `Largest integer is ${data.largest.number} and position is ${
      data.largest.index + 1
    }.\nSmallest integer is ${data.smallest.number} and position is ${
      data.smallest.index + 1
    }.`
  );
  confirm('Do you want to try again?') && main();
};

main();
