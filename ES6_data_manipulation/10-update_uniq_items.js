export default function updateUniqueItems(map) {
  // Check if argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Update quantities of 1 to 100
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  // Return the updated Map
  return map;
}
