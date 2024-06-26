export default function divideFunction(numerator, denominator) {
const res = numerator / denominator
if (denominator === 0) {
throw new Error("cannot divide by 0");
}
else {
  return res
}
}