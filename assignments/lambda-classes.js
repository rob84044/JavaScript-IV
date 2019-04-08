// CODE here for your Lambda Classes

class Person{
  constructor(values){
    this.name = values.name;
    this.age = values.age;
    this.location = values.location;
    this.gender = values.gender;
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
  constructor (values){
    super(values);
    this.previousBackground = values.previousBackground;
    this.className = values.className;
    this.favSubjects = values.favSubjects;
  
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(`${subject}`));
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(student, subject){
   return `${student.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor{
  constructor(values){
    super(values);
    this.gradClassName = values.gradClassName;
    this.favInstructor = values.favInstructor;
  }
  standUp(channel){
   return `${this.name} announces to ${channel}, @channel StandUp times!​​​​​`
  }
  debugsCode(subject, student){
  return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

// Students

const rob = new Student({
  name:'Robert',
  age: 26,
  location:'Sandy, UT',
  gender:'M',
  previousBackground:`Belly Dancing`,
  className:'WebPT5',
  favSubjects: ['HTML5', 'CSS3', 'JS'],
});

const cedric = new Student({
  name:'Cedric',
  age: 22,
  location:'Portland, Oregon',
  gender:'M',
  previousBackground:`Professional Diving`,
  className: 'WebPT5',
  favSubjects: ['Less', 'Being a GrandWizard'],
});

const dan = new Student({
  name:'Dan S',
  age: 32,
  location:'Seattle Washington',
  gender:'M',
  previousBackground:`Belly Dancing`,
  className: 'WebPT5',
  favSubjects: ['Construction', 'Manual Labor'],
});

// New instructor

const brandy = new Instructor({
  name:'Brandy R',
  age: 29,
  location:'Denver Colorado',
  gender:'F',
  specialty: 'Teaching',
  favLanguage:'JavaScript, HTML5',
  catchPhrase:'Don\'t Forget the Homies'
});

// New ProjectManager

const marco = new ProjectManager({
  name:'Margo G',
  age: 35,
  location:'California',
  gender:'M',
  gradClassName: 'CS3',
  favInstructor: 'Cam Pope'
});


rob.speak();
cedric.speak();
dan.speak();
brandy.speak();
marco.speak();


brandy.demo();

brandy.grade();


rob.listsSubjects();
cedric.listsSubjects();
dan.listsSubjects();

rob.PRAssignment();
cedric.PRAssignment();
dan.PRAssignment();

rob.sprintChallenge();
cedric.sprintChallenge();
dan.sprintChallenge();

marco.standUp();

marco.debugsCode();