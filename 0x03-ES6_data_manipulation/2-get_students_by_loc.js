const getStudentsByLocation = (listStudents, city) => (
  listStudents.filter((students) => students.location === city));

export default getStudentsByLocation;
