export default function concatArrays(array1, array2, string) {
  const combined = [...array1, ...array2];
  const character = [...string];
  return [...combined, ...character];
}
