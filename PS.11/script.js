/**
 *  Write a program to accept cardinality of set A as N, and cardinality of set B as M.
 *  Then accept elements of set A and set B.
 *  Generate set C which is union of set A and set B, set D which is intersection set of set A and Set B.
 *  Print set A, B, C, D, Cardinality of set C, Cardinality of set D.
 */

const getInput = () => {
  const sets = [
    {
      set: 'A',
      cardinality: 0,
      values: [],
    },
    {
      set: 'B',
      cardinality: 0,
      values: [],
    },
  ];
  [...Array(2).keys()].forEach((ele) => {
    sets[ele].cardinality = prompt(`Enter cardinality of Set ${sets[ele].set}`);
  });
  sets.map((set) => {
    [...Array(parseInt(set.cardinality)).keys()].forEach((_e) => {
      const value = prompt(`Enter elements of Set ${set.set}`);
      set.values.push(parseInt(value));
    });
  });
  return sets;
};

const main = () => {
  const sets = getInput();
  const [setA, setB] = sets;
  const union = [...new Set([...setA.values, ...setB.values])];
  const intersection = setA.values.filter((value) =>
    setB.values.includes(value)
  );

  alert(
    `Set A: ${setA.values}\nSet B: ${setB.values}\nSet C: ${union}\nSet D: ${intersection}\nCardinality of Set C: ${union.length}\nCardinality of Set D: ${intersection.length}`
  );
};

main();
