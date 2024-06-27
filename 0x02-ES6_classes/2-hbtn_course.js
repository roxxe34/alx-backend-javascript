export default class HolbertonCourse {
  constructor(name, length, students){
      this.name = name;
      this.length = length
      this.students = students
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }
  get length() {
    return this._length
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length
  } else {
    throw new TypeError('length must be a number');
  }
}
  get students() {
    return this._students
  }
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
