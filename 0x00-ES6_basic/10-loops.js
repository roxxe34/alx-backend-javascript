export default function appendToEachArrayValue(array, appendString) {
  const new_ar = [];
  for (const value of array) {
    new_ar.push(appendString + value);
  }

  return new_ar;
}
