"use strict";
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // Now, with private, employees can't be acessed from outside (only with instance methods)
    }
    // We get this param anyways, but like this is a one more type check, that will guarantee this method will only be called by a instance of this class
    describe() {
        console.log(`Department:\nID - ${this.id}\nName - ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ["Fayad"]);
it.name = "NEW NAME";
it.addEmployee("Renan");
it.addEmployee("Fayad");
console.log(it);
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong");
accounting.printReports();
//const accountingCopy = { name: "DUMMY", describe: it.describe }; // If this object has all propeties and methods and Department, will not show error
