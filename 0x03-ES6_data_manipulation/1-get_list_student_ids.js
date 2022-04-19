const getListStudentIds = (myArray) => {
    if (!(Array.isArray(myArray)))
        return myArray = [];
    return myArray.map((studentId) => studentId.id);
}

export default getListStudentIds;