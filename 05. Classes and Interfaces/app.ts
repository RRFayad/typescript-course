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
abstract class Department {
  // private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)
  protected employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)

  constructor(
    protected readonly id: string,
    public name: string
  ) {}

  // We get this param anyways, but like this is a one more type check, that will guarantee this method will only be called by a instance of this class
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

console.log(Department.createEmployee("Renan"));

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(this: Department): void {
    console.log(this.name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //prettier-ignore
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log(`Accounting Department ID:  ${this.id}`);
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

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting === accounting2);

accounting.addReport("Something went wrongaa");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "This is the latest report after the wrongaa";
console.log(accounting.mostRecentReport);

accounting.describe();
//const accountingCopy = { name: "DUMMY", describe: it.describe }; // If this object has all propeties and methods and Department, will not show error
