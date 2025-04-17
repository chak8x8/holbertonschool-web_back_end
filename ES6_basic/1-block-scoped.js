export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = false;
    const task2 = true;
    return [true, false];
  }

  return [task, task2];
}
