class Department {
  name: string; // As default, here name is public
  private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)

  constructor(name: string) {
    this.name = name;
  }

  // We get this param anyways, but like this is a one more type check, that will guarantee this method will only be called by a instance of this class
  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Renan");
accounting.addEmployee("Fayad");

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInfo();

const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // If this object has all propeties and methods and Department, will not show error
