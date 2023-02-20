var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {}; 

//inherit prototype properties of function 'Person'
Teacher.prototype = Object.create(Person.prototype);

//set prototype property of funtion 'Teacher'
Teacher.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
};

var him = new Teacher();

him.initialize("Manik", 25);
him.teach("Javascript");
