export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  const result = [...set].filter((x) => x.startsWith(startString));
  const sliced = result.map((x) => x.slice(startString.length));
  return sliced.join('-');
}
