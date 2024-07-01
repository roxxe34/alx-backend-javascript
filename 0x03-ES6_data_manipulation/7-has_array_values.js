export default function hasValuesFromArray(set, array) {
  if (array.length == 1)
    {
      return set.has(array[0])
    }
  const check = array.map(x => set.has(x))
  const element = false
  if(check.includes(element)) {
    return false
  }
}
