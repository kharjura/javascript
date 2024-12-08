class Employee {
    name;
    age;
    salary;
    contact;

    // constructor: assign values for the class attributes
    constructor(name, age, salary, contact) {
        this.name = name; //this.name = name current object reference
        this.age = age;
        this.salary = salary;
        this.contact = contact;
    }

printDetails() {
document.write("name: " + this.name + "<br>");
document.write("age: " + this.age + "<br>");
document.write("salary: " + this.salary + "<br>");
document.write("contact: " + this.contact + "<br>");
}
}

// create an object for Employee
let Employee1 = new Employee("Harsha", 24, 1000, 123445678);
Employee1.printDetails();
let Employee2 = new Employee("Amith", 26, 1500, 98765432);
Employee2.printDetails();


// create a class shape and provide length and breath. create a function the area and perimeter of the shape
//consider the shapes to be rectangle and square

