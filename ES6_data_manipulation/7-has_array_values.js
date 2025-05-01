export default function hasValuesFromArray(set, array) {
  // Check if all array elements exist in the set
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;


  // alternative solution:
  //export default function hasValuesFromArray(set, array) {
  //return array.every((value) => set.has(value));
  //}
}
