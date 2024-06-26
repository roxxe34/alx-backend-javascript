export default function divideFunction(numerator, denominator) {
const res = numerator / denominator
if (Number.isFinite(res)) {
throw new Error("cannot divide by 0");
}
else {
  return res
}
}