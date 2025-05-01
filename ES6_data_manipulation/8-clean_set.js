export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }

  // Filter set values that start with startString
  let array = Array.from(set);
  // Extract the remaining part of each string
  const filtered = array
    .filter((word) => typeof word === 'string' && word.startsWith(startString))
    .map((word) => word.slice(startString.length));
    // Join with '-' and return
  return filtered.join('-');
}
