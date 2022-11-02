/**
 * 	Write a program to accept a list L1 of N integers. Accept integer M.
 *  Multiply each integer in the list by M and generate a new list L2.
 *  Print the lists L1 and L2.
 */

const getInput = () => {
  const inputList = prompt('Enter list of integers');
  const multiplier = prompt('Enter multiplier');
  if (
    inputList &&
    inputList.length > 0 &&
    multiplier &&
    multiplier.length === 1
  ) {
    return { list: inputList.split(','), multiplier };
  } else if (inputList === null) {
    return;
  } else if (inputList.length === 0) {
    main();
  } else {
    alert('Please correct integers');
    confirm("Let's try again!") && main();
  }
};

const multiplyWithInteger = ({ list, multiplier }) => {
  const tempArr = [...list];
  const newArr = tempArr.map((item) => {
    return item * multiplier;
  });
  return newArr;
};

const main = () => {
  const digits = getInput();
  const data = multiplyWithInteger(digits);

  alert(
    `Entered integer list is ${digits.list}.\nList after multiplying ${data}.`
  );
  confirm('Do you want to try again?') && main();
};

main();
