const getListStudentIds = (myArray) => {
  if (Array.isArray(myArray)) {
    return myArray.map((studentId) => studentId.id);
  }
  return [];
};

export default getListStudentIds;
