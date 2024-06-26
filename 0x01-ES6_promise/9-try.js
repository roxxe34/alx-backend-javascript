export default function guardrail(mathFunction) {
  let queue = [];
  Promise.all(mathFunction).then((res) => {
    queue.push(res)
  })
  return queue
}