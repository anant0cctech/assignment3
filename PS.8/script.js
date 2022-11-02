/**
 * 	Write a program to accept a list of N integers.
 *  Accept integer K. Find the Kth smallest number in the list and its position.
 */

const getInput = () => {
  const inputList = prompt('Enter list of integers');
  const position = prompt('Enter Kth position');
  if (inputList && inputList.length > 0 && position && position.length === 1) {
    return { list: inputList.split(','), position };
  } else if (inputList === null) {
    return;
  } else if (inputList.length === 0) {
    main();
  } else {
    alert('Please correct integers');
    confirm("Let's try again!") && main();
  }
};

const findPositionSmallestNo = ({ list, position }) => {
  const tempArr = [...list];

  const sortedList = tempArr.sort((a, b) => a - b);
  const positionEle = sortedList[position - 1];
  let positionIndex = 0;

  list.map((item, index) => {
    item === positionEle && (positionIndex = index + 1);
  });

  return { positionEle, positionIndex };
};

const main = () => {
  const digits = getInput();
  const data = findPositionSmallestNo(digits);

  alert(
    `Kth smallest integer is ${data.positionEle}. And position of Kth integer is ${data.positionIndex}.`
  );
  confirm('Do you want to try again?') && main();
};

main();
