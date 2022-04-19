const getListStudentIds = (myArray = []) => {
  if (Array.isArray(myArray)) {
    return myArray.map((studentId) => studentId.id);
  }
  return myArray;
};

export default getListStudentIds;
