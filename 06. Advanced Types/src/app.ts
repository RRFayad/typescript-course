/*
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const employee1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

*/

// Same result as the commented interface structure
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Intersection = Combinable & Numeric;

// Type Guard
const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

// Custom Object Type Guard
type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
};
// printEmployeeInfo(employee1);

// Class Type Guard
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  /*
  // We can do this, but it's less elegant and precise
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
  */

  // More elegant way
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed: ${speed}`);
};

// Type Casting

//version 1
const userInputElementv1 = <HTMLInputElement>document.querySelector("#user-input");

userInputElementv1.value = "Hi there";

// versoin 2
// The ! ensures the value will not return null
const userInputElementv2 = document.querySelector("#user-input")! as HTMLInputElement;

userInputElementv2.value = "Hi there";

// version 3
// If we are not sure it will not return null - we must have an if check:
const userInputElementv3 = document.querySelector("#user-input");

if (userInputElementv3) {
  (userInputElementv3 as HTMLInputElement).value = "Hi there";
}
