/**
 * 	Write a program to accept a list L1 of N integers. Accept integer D.
 *  Generate list L2 such that it contains only those integers from list L1 which are divisible by D.
 *  Calculate the size of list L2. Print the list L1, N, D, list L2 and its size.
 */

const getInput = () => {
  const inputList = prompt('Enter list of integers');
  const divider = prompt('Enter divider');
  if (inputList && inputList.length > 0 && divider && divider.length === 1) {
    return { list: inputList.split(','), divider };
  } else if (inputList === null) {
    return;
  } else if (inputList.length === 0) {
    main();
  } else {
    alert('Please correct integers');
    confirm("Let's try again!") && main();
  }
};

const divideWithInteger = ({ list, divider }) => {
  const tempArr = [...list];
  const newArr = [];
  tempArr.map((item) => {
    item % divider === 0 && newArr.push(item);
  });
  return newArr;
};

const main = () => {
  const digits = getInput();
  const data = divideWithInteger(digits);

  alert(
    `Entered integer list is ${digits.list}.\nSize of entered List ${digits.list.length}.\nDivider ${digits.divider}.\nList after dividing ${data}.\nSize of list after division ${data.length}.`
  );
  confirm('Do you want to try again?') && main();
};

main();
