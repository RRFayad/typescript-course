"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    // We get this param anyways, but like this is a one more type check, that will guarantee this method will only be called by a instance of this class
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // It's solving the issue, because it's like we manually created a Department
accountingCopy.describe();
