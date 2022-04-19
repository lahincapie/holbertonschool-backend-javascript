const getStudentsByLocation = (listStudents, city) => {
  return listStudents.filter((students) => students.location === city);
}

export default getStudentsByLocation;