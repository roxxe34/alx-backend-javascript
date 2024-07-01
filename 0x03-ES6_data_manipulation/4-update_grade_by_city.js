export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.filter((student) => student.location === city)
    .map((student) => {
      const gradeArray = newGrades.filter((x) => x.studentId === student.id);
      const grade = gradeArray.length > 0 ? gradeArray[0].grade : 'N/A';
      return { ...student, grade };
    });
}
