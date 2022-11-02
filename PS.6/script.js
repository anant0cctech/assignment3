/**
 * Accept cost price(CP) and Selling price(SP) of an item.
 * Calculate the amount of PROFIT/LOSS made by the seller and print
 */

const getInput = () => {
  const costPrice = prompt('Enter cost price');
  const sellingPrice = prompt('Enter selling price');
  if (
    costPrice &&
    sellingPrice &&
    costPrice.length > 0 &&
    sellingPrice.length > 0
  ) {
    return { costPrice, sellingPrice };
  } else if (costPrice === null || sellingPrice === null) {
    return;
  } else if (costPrice.length === 0 || sellingPrice.length === 0) {
    main();
  } else {
    alert('Please correct enter a price');
    confirm("Let's try again!") && main();
  }
};

const getProfit = (price) => {
  return parseInt(price.costPrice) < parseInt(price.sellingPrice);
};

const getDiff = (price) => {
  return parseInt(price.sellingPrice) - parseInt(price.costPrice);
};

const main = () => {
  const price = getInput();

  if (getProfit(price)) {
    alert(`You have profit of ${getDiff(price)}`);
  } else {
    alert(`You have loss of ${getDiff(price)}`);
  }
  confirm('Do you want to try again?') && main();
};

main();
