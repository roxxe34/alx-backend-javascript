export default function cleanSet(set,startString) {
  if (startString.length == 0 || set.size == 0) {
    return ''
  }
  const result = [...set].filter(x => x.startsWith(startString));
  let sliced = result.map(x => x.slice(startString.length));
  return sliced.join("-")
}