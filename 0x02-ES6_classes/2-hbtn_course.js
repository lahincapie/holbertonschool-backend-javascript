/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === "string") {
      this._name = name;
    }
    else {
      throw new TypeError("Name must be a string");
    }
    if (typeof length === "number") {
      this._length = length;
    }
    else {
      throw new TypeError("Length must be a number");
    }
    students.forEach((student) => {
      if (typeof student === 'string') {
        this._students = students;
      }
      else {
        throw new TypeError("Students must be a array of string")
      }
    });
  }
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value;
  }
  get length() {
    return this._length
  }
  set length(value) {
    this._length = value;
  }
  get students() {
    return this._students
  }
  set students(value) {
    this._students = value;
  }
}
