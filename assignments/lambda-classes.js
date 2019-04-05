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
  constructor (){
    
  }
}

