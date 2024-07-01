export default function setFromArray(setarr) {
const myset = new Set()
setarr.map(x => myset.add(x))
return myset
}