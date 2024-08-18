class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return ${this.firstName} ${this.lastName};
    }
  
    isAdult() {
      return this.age >= 18;
    }
  
    updateEmail(newEmail) {
      this.email = newEmail;
    }
  
    displayDetails() {
      return Name: ${this.getFullName()}, Age: ${this.age}, Email: ${this.email};
    }
  }

const person1 = new Person('santhosh', 'sankar', 23, 'santhosh2001law@gmail.com');
console.log(person1.getFullName()); 
console.log(person1.isAdult());
console.log(person1.displayDetails());