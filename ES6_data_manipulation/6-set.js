/**
 * Creates a Set from an array, removing duplicates.
 * @param {Array} array - The input array of any element type.
 * @returns {Set} A Set containing unique elements from the input array.
 */
export default function setFromArray(array) {
  return new Set(array);
}
