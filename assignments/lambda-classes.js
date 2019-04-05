// CODE here for your Lambda Classes

class Person{
  constructor(values){
    this.name = values.name;
    this.age = values.age;
    this.location = values.location;
    this.gender = values.gender;
    this.name = values.name;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person{
  constructor (values){
    super(values);
    this.specialty = values.specialty;
    this.favLanguage = values.favLanguage;
    this.catchPhrase = values.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person{
  constructor (value){
    super(value);
    this.previousBackground = values.previousBackground;
    this.className = values.className;
    this.favSubjects = values.favSubjects;
    this.grade = 12;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(`${subject}`));
  }
  PRAssignment(){
    `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(){
    `${student.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Person{
  constructor(value){
    super(value);
    this.gradClassName = value.gradClassName;
    this.favInstructor = value.favInstructor;
  }
  standUp(){
    `${name} announces to ${channel}, @channel StandUp times!​​​​​`
  }
  debugsCode(){
    `${name} debugs ${student.name}'s code on ${subject}`
  }
}


