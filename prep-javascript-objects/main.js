var person = {
  firstName: 'Lisa',
  lastName: 'Le',
  hobby: 'watching tv'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName + '.');

person.job = 'Bookkeeper';
console.log("The person's current job is:", person.job + '.');

person.previousJob = 'Cake Decorater';
console.log("The person's previous job is:", person.previousJob + '.');

console.log(person);
