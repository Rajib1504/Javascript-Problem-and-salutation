function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    console.log("Invalid Input");
  }
  const containNum = [];
  for (const item of array) {
    if (typeof item === "number" && !Number.isNaN(item)) {
      containNum.push(item);
    }
  }
  return containNum;
}
const num = [1, 2, -3];
const result = deleteInvalids(num);
console.log(result);
