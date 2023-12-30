function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},

    info: function() {
      console.log(`${this.name} is a ${this.year} year student`)
    },

    listCourses: function() {
      console.log(this.courses);
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    findCourseByCode(code) {
      let tempCourse = '';
      this.courses.forEach(course => {
        if (course.code === code) {
          tempCourse = course.name;
        }
      })
      return tempCourse;
    },

    addNote: function(code, note) {
      if (this.notes.hasOwnProperty(this.findCourseByCode(code))) {
        this.notes[this.findCourseByCode(code)].push(note);
      } else {
        this.notes[this.findCourseByCode(code)] = [];
        this.notes[this.findCourseByCode(code)].push(note);
      };
    },

    viewNotes: function() {
      for (const key in this.notes) {
        console.log(`${key}: ${this.notes[key].join(`; `)}`)
      }
    },

    updateNote: function(code, note) {
      this.notes[this.findCourseByCode(code)] = [];
      this.notes[this.findCourseByCode(code)].push(note);
    }
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"