/**
 * Write a program to accept number of circles N and radius and coordinates of center (x,y) for each circle.
 * Select appropriate data structure and explain why you chose it.
 * Arrange the circles in increasing order of their area and print all the data of each circle.
 */

const getInput = () => {
  const input = prompt('Enter number of circles you want to enter');
  if (input && parseInt(input) > 0) {
    const data = [];
    for (let i = 0; i < input; i++) {
      const radius = prompt(`Enter radius of circle ${i + 1}`);
      const coordinates = prompt(`Enter co-ordinates of circle (x,y) ${i + 1}`);
      if (radius.length === 0 || coordinates.length === 0) {
        return null;
      } else {
        const area = Math.PI * Math.pow(radius, 2);
        data.push({ radius, coordinates, area });
      }
    }
    console.log(data);
    return data;
  } else if (input === null) {
    return;
  } else if (input.length === 0) {
    main();
  } else {
    alert('Please enter correct integers');
    confirm("Let's try again!") && main();
  }
};

const sortCircleData = (circles) => {
  return [...circles].sort((a, b) => a.area - b.area);
};

const main = () => {
  const circles = getInput();

  if (circles === null) {
    alert('Please enter correct integers');
    confirm("Let's try again!") && main();
  } else {
    const sortedCircles = sortCircleData(circles);

    const printCircles = (sortedCircles) => {
      let printString = '';
      sortedCircles.map((circle, index) => {
        printString += `${index + 1}. `;
        printString += `Radius: ${circle.radius} `;
        printString += `Co-Ordinates: ${circle.coordinates} `;
        printString += `Area: ${circle.area.toFixed(2)}`;
        printString += `\n`;
      });
      return printString;
    };

    alert(
      `You have entered total ${
        circles.length
      } circles.\nHere is the data for circle.\n\n${printCircles(
        sortedCircles
      )}`
    );

    confirm('Do you want to try again?') && main();
  }
};

main();
