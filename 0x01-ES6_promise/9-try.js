export default async function guardrail(mathFunction) {
  let queue = [];
  let results = await Promise.all([mathFunction()]);
  queue.push(results)
  queue.push("Guardrail was processed")
  return queue
}