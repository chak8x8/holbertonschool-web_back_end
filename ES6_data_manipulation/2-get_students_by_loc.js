export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) throw new TypeError('Students must be an array');
  if (typeof city !== 'string') throw new TypeError('City must be a string');

  return students.filter((student) => student.location === city);
}
