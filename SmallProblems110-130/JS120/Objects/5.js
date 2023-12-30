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

let school = {
  students: [],

  addStudent: function(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      return "Invalid Year";
    } else {
      this.students.push(createStudent(name, year));
      return this.students[this.students.length - 1];
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade: function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function() {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name} : ${String(course.grade)}`);
      } else {
        console.log(`${course.name} : In progress`);
      }
    });
  },

  courseReport: function() {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
}