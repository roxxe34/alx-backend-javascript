export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  let result = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += (result ? '-' : '') + item.slice(startString.length);
    }
  }
  return result;
}
