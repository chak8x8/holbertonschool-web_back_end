export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) throw new TypeError('Students must be an array');
  if (typeof city !== 'string') throw new TypeError('City must be a string');
  if (!Array.isArray(newGrades)) throw new TypeError('NewGrades must be an array');

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const match = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: match ? match.grade : 'N/A',
      };
    });
}
