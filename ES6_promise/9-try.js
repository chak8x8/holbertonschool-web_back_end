export default function guardrail(mathfunction) {
  const queue = [];
  try {
    const result = mathfunction()
    queue.push(result);
  }
  catch (error) {
    queue.push(error.toString());
  }
  finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
