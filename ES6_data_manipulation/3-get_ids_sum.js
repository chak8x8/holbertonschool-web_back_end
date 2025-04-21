export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) throw new TypeError('Students must be an array');

  const sum = students.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
