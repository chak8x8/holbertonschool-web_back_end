export default function guardrail(mathfunction) {
  const queue = [];
  try {
    const result = mathfunction()
    queue.push(result);
  }
  catch (error) {
    queue.push(error.message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
