const getStudentIdsSum = (listStudents) => {
  const ids =listStudents.map((studentId) => studentId.id);
  return ids.reduce((id, sumId) => id + sumId)
}

export default getStudentIdsSum;
