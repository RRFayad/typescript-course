// Project State Management

class ProjectState {
  private listeners: any[] = [];
  private projects: any[] = [];
  private static instance: ProjectState;

  private constructor() {}

  // This is the way we guarantee there will only be one instance of the State
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, people: number) {
    const newProject = {
      id: Date.now(),
      title,
      description,
      people,
    };
    this.projects.push(newProject);

    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

// Inputs Validation Logic
interface projectInputValidationConfig {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

const validate = (toBeValidatedInput: projectInputValidationConfig): boolean => {
  let isValid = true;

  if (toBeValidatedInput.required) {
    isValid = isValid && toBeValidatedInput.value.toString().trim().length !== 0;
  }
  if (toBeValidatedInput.minLength != null && typeof toBeValidatedInput.value === "string") {
    isValid = isValid && toBeValidatedInput.value.trim().length >= toBeValidatedInput.minLength;
  }
  if (toBeValidatedInput.maxLength != null && typeof toBeValidatedInput.value === "string") {
    isValid = isValid && toBeValidatedInput.value.trim().length <= toBeValidatedInput.maxLength;
  }
  if (toBeValidatedInput.min != null && typeof toBeValidatedInput.value === "number") {
    isValid = isValid && toBeValidatedInput.value >= toBeValidatedInput.min;
  }
  if (toBeValidatedInput.max != null && typeof toBeValidatedInput.value === "number") {
    isValid = isValid && toBeValidatedInput.value <= toBeValidatedInput.max;
  }
  return isValid;
};

// ProjectList Class
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: any[];

  constructor(private type: "active" | "finished") {
    // remember this is a shorthand to declare (and define the type and value) of a property
    this.templateElement = document.querySelector("#project-list")! as HTMLTemplateElement;
    this.hostElement = document.querySelector("#app")! as HTMLDivElement;
    this.assignedProjects = [];

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${type}-projects`;

    projectState.addListener((projects: any[]) => {
      this.assignedProjects = projects;
    });

    this.attach();
    this.renderContent();
    this.renderProjects();
  }

  private renderProjects() {
    const listEl = document.querySelector(`${this.type}-projects-list`)! as HTMLUListElement;
    for (const item of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      listEl.appendChild(listItem);
    }
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + "PROJECTS";
  }
}

// autobind decorator
function autobind(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjustedDescriptor;
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.querySelector("#project-input")! as HTMLTemplateElement;
    this.hostElement = document.querySelector("#app")! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector("#title")! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector("#description")! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector("#people")! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleToBeValidated: projectInputValidationConfig = { value: enteredTitle, required: true };
    const descriptionToBeValidated: projectInputValidationConfig = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleToBeValidated: projectInputValidationConfig = { value: +enteredPeople, required: true, min: 1, max: 5 };

    if (validate(titleToBeValidated) && validate(descriptionToBeValidated) && validate(peopleToBeValidated)) {
      return [enteredTitle, enteredDescription, +enteredPeople];
    } else {
      alert("Invalid input - Try again");
    }
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.titleInputElement.value);
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
