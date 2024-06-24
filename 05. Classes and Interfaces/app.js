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
        // private employees: string[] = []; // Now, with private, employees can't be acessed from outside (only with instance methods)
        this.employees = []; // Now, with private, employees can't be acessed from outside (only with instance methods)
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name };
    }
}
console.log(Department.createEmployee("Renan"));
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(this.name);
    }
}
class AccountingDepartment extends Department {
    //prettier-ignore
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    addReport(text) {
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
    set mostRecentReport(value) {
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
