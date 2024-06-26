// Generics intro
{
  const names: Array<string> = [];

  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is done");
    }, 2000);
  });

  promise.then((value) => value.split(" "));
}
// 96. Creating a Generic Function
{
  function merge<T, U>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  const mergedObj = merge({ name: "Renan", hobbies: ["sports"] }, { age: 34 });

  console.log(mergedObj);
}

// 97. Working with Constraints
{
  // Now we declare that our generic types must be objects
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  // With the constrain, if any value is not an object, will return an error
  const mergedObj = merge({ name: "Renan", hobbies: ["sports"] }, { age: 34 });

  console.log(mergedObj);
}

// 98. ANother Generic FUnction

{
  interface Lengthy {
    length: number;
  }

  // We set the Lenghty interface constaint
  // Remember that strings and arrays are objects that have length property
  const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
    let descriptionText = "Got no value";
    if (element.length > 0) {
      descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
  };

  console.log(countAndDescribe("Hi there"));
  console.log(countAndDescribe(["Sports", "Cooking"]));
}

// 99. keyof Constraint

{
  const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return `${obj[key]}`;
  };

  console.log(extractAndConvert({ name: "Renan" }, "name"));
}

//  100. Generic Classes

{
  class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      const index = this.data.indexOf(item);
      index > -1 && this.data.splice(index, 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem("Renan");
  textStorage.addItem("Fayad");
  textStorage.removeItem("Fayad");
  console.log(textStorage.getItems());

  // Now if we want we can create a NumberStorage as well
}

// 102. Generic Utility Types

{
  // Partial
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }

  const createCouseGoal = (title: string, description: string, completionDate: Date): CourseGoal => {
    // We could return courseGoal, but let's consider we need to make it step-by-step here (maybe because we need to fetch and validate)
    let courseGoal: Partial<CourseGoal> = {}; // This says to TS somehting like: "This is not a CouseGoal type already, but truste me, it willl be!"
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completionDate;

    return courseGoal as CourseGoal; // So we need to convert it definetly to CourseGoal
  };

  // Readonly
  const names: Readonly<string[]> = ["Renan", "Fayad"];
  // names[0] = "AA";  // Returns error (but compiles)
}

// 103. Generic Types vs Union Types

{
  class DataStorage {
    private data: (string | number | boolean)[] = [];

    addItem(item: string | number | boolean) {
      // This approach would mix the elements in our array. while Generic Types would keep the consistency (only one type in the whole array)
      this.data.push(item);
    }

    removeItem(item: string | number | boolean) {
      const index = this.data.indexOf(item);
      index > -1 && this.data.splice(index, 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage();
  textStorage.addItem("Renan");
  textStorage.addItem("Fayad");
  textStorage.removeItem("Fayad");
  console.log(textStorage.getItems());

  // Now if we want we can create a NumberStorage as well
}
