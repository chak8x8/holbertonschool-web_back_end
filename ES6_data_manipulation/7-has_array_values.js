export default function hasValuesFromArray(set, array) {
  // Check if all array elements exist in the set
  return array.has((value) => set.has(value));
}
