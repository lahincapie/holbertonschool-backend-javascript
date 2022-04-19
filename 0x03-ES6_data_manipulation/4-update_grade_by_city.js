const updateStudentGradeByCity = (listStudents, city, newGrades) => (
  listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...student, grade };
    })
);

export default updateStudentGradeByCity;
