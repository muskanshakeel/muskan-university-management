"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = [];
    }
    registerforCourse(courses) {
        this.courses.push(courses);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.student = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.student.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new student("Muskan Shakeel", 22, 12345);
const std2 = new student("Tabsheera Shakeel", 17, 45678);
const std3 = new student("Areefa Salman", 20, 11223);
let Instructor1 = new Instructor("Ahmed Ali", 22, "$900000");
let Instructor2 = new Instructor("Uzair Khan", 24, "$800000");
let Instructor3 = new Instructor("Hamzah Syed", 23, "$700000");
const course1 = new Course(1, "Python");
const course2 = new Course(2, "HTML");
const course3 = new Course(3, "Typescript");
const Department1 = new Department("Computer Science");
const Department2 = new Department("Commerce");
const Department3 = new Department("English Literature");
std1.registerforCourse(course1);
std2.registerforCourse(course2);
std2.registerforCourse(course3);
std3.registerforCourse(course3);
Department1.addCourse(course1);
Department2.addCourse(course2);
Department3.addCourse(course3);
course1.addStudent(std1);
course2.addStudent(std2);
course3.addStudent(std3);
course3.addStudent(std2);
course1.setInstructor(Instructor1);
course2.setInstructor(Instructor2);
course3.setInstructor(Instructor3);
console.log(Department3.courses[0]);
console.log(Instructor1.courses);
console.log(std1.courses[0]);
console.log(course3.student);
console.log(std1.courses);
console.log(Department1.courses);
