const logEach = function (arr) {
  const array = [];
  for (const item of arr) {
    array.push(item);
  }
  console.log(array);
};
const fruits = ["apple", "orange", "kiwi"];
logEach(fruits);
