/**
 * Checks if all elements in an array exist within a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of elements to verify.
 * @returns {boolean} True if all array elements are in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
