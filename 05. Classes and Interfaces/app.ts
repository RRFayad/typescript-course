// class Department {
//   private name: string; // As default, here name is public
//   private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)

//   constructor(name: string) {
//     this.name = name;
//   }

//   // We get this param anyways, but like this is a one more type check, that will guarantee this method will only be called by a instance of this class
//   describe(this: Department) {
//     console.log("Department: " + this.name);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInfo() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// Short hand initializatoin (without repeating the type and constructor declaration)
class Department {
  // private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)
  protected employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)

  constructor(
    private readonly id: string,
    public name: string
  ) {}

  // We get this param anyways, but like this is a one more type check, that will guarantee this method will only be called by a instance of this class
  describe(this: Department) {
    console.log(`Department:\nID - ${this.id}\nName - ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //prettier-ignore
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }
}

const it = new ITDepartment("d1", ["Fayad"]);
it.name = "NEW NAME";

it.addEmployee("Renan");
it.addEmployee("Fayad");

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrongaa");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "This is the latest report after the wrongaa";
console.log(accounting.mostRecentReport);

//const accountingCopy = { name: "DUMMY", describe: it.describe }; // If this object has all propeties and methods and Department, will not show error
