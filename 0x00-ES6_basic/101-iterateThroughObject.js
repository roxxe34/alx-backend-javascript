export default function iterateThroughObject(reportWithIterator) {
  let no = reportWithIterator.next();
  let ress = '';

  while (!n.done) {
    ress += `${no.value} | `;
    no = reportWithIterator.next();
  }
  return ress.slice(0, ress.length - 3);
}
