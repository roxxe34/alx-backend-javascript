export default function createIteratorObject(report) {
  const alls = Object.values(report.allEmployees).reduce((a, b) => {
    a.push(...b);
    return a;
  }, []);
  let currtIndex = 0;
  const maxIndex = alls.length;
  return {
    next() {
      if (currtIndex < maxIndex) {
        const result = { value: alls[currtIndex], done: false };
        currtIndex += 1;
        return result;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
