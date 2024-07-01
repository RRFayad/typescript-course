/// <reference path="./components/project-list.ts" />
/// <reference path="./components/project-input.ts" />

namespace App {
  // ProjectInput Class

  const prjInput = new ProjectInput();
  const activePrjList = new ProjectList("active");
  const finishedPrjList = new ProjectList("finished");
}
