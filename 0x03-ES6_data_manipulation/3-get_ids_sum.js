export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.reduce(
    (accumulator, student) => accumulator + student.id, 0,
  );
}
