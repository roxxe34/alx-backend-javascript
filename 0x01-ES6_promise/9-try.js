export default async function guardrail(mathFunction) {
  const queue = [];
  const results = await Promise.all([mathFunction()]);
  queue.push(results);
  queue.push('Guardrail was processed');
  return queue;
}
