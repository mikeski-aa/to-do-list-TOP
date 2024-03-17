import "./style.css";

// factory function to create a new to-do object

const createNewTodo = (title, details, dueDate, prio) => {
  const toDoTitle = title;
  const toDoDetails = details;
  const toDoDueDate = dueDate;
  const toDoPrio = prio;
  const toDoCompleted = false;
  const toDoID = 0;

  const print = () => {
    console.log(
      `Title: ${toDoTitle}, Details: ${toDoDetails}, Due Date: ${toDoDueDate}, Priority: ${toDoPrio}`
    );
  };

  return {
    toDoTitle,
    toDoDetails,
    toDoDueDate,
    toDoPrio,
    toDoCompleted,
    toDoID,
    print,
  };
};
//factory function for creation of new projects which are to go into projects array

const createNewProject = (title, task) => {
  const projectTitle = title;
  const projectFirstTask = task;

  return {
    projectTitle,
    task,
  };
};
// storing objects in an array, all to do lists live within their own project
// additional array manipulation methods need to be added here - i.e removing items from array
const toDoObjects = () => {
  const array = [];

  function toDoContainer(myItem) {
    array.push(myItem);

    return {
      array,
    };
  }

  return {
    toDoContainer,
    array,
  };
};

//create a new container object for easier handling
function createContentContainer() {
  let body = document.querySelector("body");
  let newContainer = document.createElement("div");
  newContainer.classList.add("content");
  body.appendChild(newContainer);
}

//dom manipulation to be done here ---------------------------------------------------------
const domElementManipulation = () => {
  let content = document.querySelector(".content");

  const createNewDiv = (divName) => {
    let content = document.querySelector(".content");
    let newDiv = document.createElement("div");
    newDiv.classList.add(divName);
    content.appendChild(newDiv);
  };

  const createNewBtn = (targetAppend, btnTxt) => {
    let target;

    if (targetAppend == "header") {
      console.log("working");
      target = document.querySelector(targetAppend);
    } else {
      target = document.querySelector(`.${targetAppend}`);
    }

    let btn = document.createElement("button");
    btn.classList.add(`${btnTxt}`);
    if (btnTxt == "add") {
      btn.textContent = "Add a new To Do item!";
    } else {
      btn.textContent = btnTxt;
    }

    target.appendChild(btn);
  };

  // creates a div inside div with additional functionality to create a paragraph within subsequent div
  const createNewDivInsideDiv = (
    targetDiv,
    newDivClass,
    targetOfTarget,
    type
  ) => {
    let newDiv;
    let target = document.querySelector(`.${targetDiv}`);
    if (targetOfTarget !== undefined) {
      let targetOT = target.querySelector(`.${targetOfTarget}`);

      newDiv = document.createElement("p");
      newDiv.classList.add(newDivClass || "default");
      targetOT.appendChild(newDiv);
    } else {
      if (type == undefined) {
        newDiv = document.createElement("div");
      } else if (type === "h3") {
        newDiv = document.createElement("h3");
      }

      console.log(target);
      newDiv.classList.add(newDivClass || "default");

      target.appendChild(newDiv);
    }
  };

  // creates an empty project card boilerplate
  const createProjectCardBoilerplate = (projectName) => {
    createNewDiv(projectName);
    createNewDivInsideDiv(projectName, "projectTitle", undefined, "h3");
    createNewDivInsideDiv(projectName, "firstItem");

    createNewBtn(projectName, "OpenProject");
    createNewBtn(projectName, "DeleteProject");
   
  };

  // remove project button
  const removeProjectCard = (targetCard) => {
    let btn = targetCard.querySelector('.DeleteProject');
    btn.addEventListener('click', (e) => {
      console.log(btn.closest('div'));
    })
  }

  // append project card
  const appendProjectCard = (targetCard, sourceObject, sourceContainer) => {
    let target = document.querySelector(`.${targetCard}`);
    let projectTitle = target.querySelector(".projectTitle");
    let firstItem = target.querySelector(".firstItem");
    projectTitle.textContent = sourceObject.projectTitle;
 
    // prevents errors when project is empty and you go back
    if (container.array.length !== 0) {
      firstItem.textContent =
        sourceContainer.array[0].toDoTitle +
        " , " +
        sourceContainer.array[0].toDoDueDate;
    };

    // removeProjectCard(projectName);
  };

  // creates an empty boilerplate card to be filled with user values
  const createCardBoilerplate = (toDoName) => {
    createNewDiv(toDoName);
    createNewDivInsideDiv(toDoName, "title");

    createNewDivInsideDiv(toDoName, "description");
    createNewDivInsideDiv(toDoName, "descTemp", "description");
    createNewDivInsideDiv(toDoName, "descVal", "description");

    createNewDivInsideDiv(toDoName, "priority");
    createNewDivInsideDiv(toDoName, "prioTemp", "priority");
    createNewDivInsideDiv(toDoName, "prioVal", "priority");

    createNewDivInsideDiv(toDoName, "date");
    createNewBtn(toDoName, "Done");
    createNewBtn(toDoName, "Delete");
  };
  // creates new to-do card using data from stored object within the container.array array
  const appendCardFromArray = (targetCard, sourceObject) => {
    let target = document.querySelector(`.${targetCard}`);
    let title = target.querySelector(".title");
    let desc = target.querySelector(".description");
    let prio = target.querySelector(".priority");
    let date = target.querySelector(".date");
    let descTitle = desc.querySelector(".descTemp");
    let descCont = desc.querySelector(".descVal");
    let prioTitle = prio.querySelector(".prioTemp");
    let prioCont = prio.querySelector(".prioVal");

    title.textContent = "Title: " + sourceObject.toDoTitle;

    descTitle.textContent = "Details: ";
    descCont.textContent = sourceObject.toDoDetails;

    prioTitle.textContent = "Priority: ";
    prioCont.textContent = sourceObject.toDoPrio;

    date.textContent = "Due date: " + sourceObject.toDoDueDate;
    removeCard(target, sourceObject);
    taskStatus(target, sourceObject);
  };

  // removes click target from visible card (deletes dom object) and from array
  const removeCard = (target, sourceObject) => {
    let content = document.querySelector(".content");
    let btn = target.querySelector(".Delete");
    btn.addEventListener("click", (e) => {
      console.log(btn.closest("div"));
      let child = btn.closest("div");
      content.removeChild(child);
      console.log(container.array.indexOf(sourceObject));
      container.array.splice(container.array.indexOf(sourceObject), 1);
      console.log(container.array);
    });
  };
  // enables task status toggle on card and within array
  const taskStatus = (target, sourceObject) => {
    let btn = target.querySelector(".Done");
    btn.addEventListener("click", (e) => {
      if (sourceObject.toDoCompleted === true) {
        sourceObject.toDoCompleted = false;
        console.log(sourceObject.toDoCompleted);
      } else {
        sourceObject.toDoCompleted = true;
        console.log(sourceObject.toDoCompleted);
      }
    });
  };
  // toggle form visibility - form is invisible with height 0 by default
  const toggleFormVisibility = () => {
    let form = document.querySelector("form");
    let addBtn = document.querySelector(".add");
    addBtn.addEventListener("click", () => {
      if (form.style.visibility === "visible") {
        form.style.visibility = "hidden";
        form.style.height = "0";
        addBtn.textContent = "Add a new To Do item!";
      } else {
        form.style.visibility = "visible";
        form.style.height = "100%";
        addBtn.textContent = "Click to hide form!";
      }
    });
  };

  const changeTitle = (newTitle) => {
    let title = document.querySelector("h1");
    title.textContent = newTitle;
  };

  // this function renders all cards from the container array
  // in the future i need to add functionality for switching between arrays otherwise only first project will work correctly.

  const renderToDoCards = () => {
    let noOfCards = container.array.length;
    console.log(noOfCards);
    let renderCounter = 0;

    for (let i = 0; i < noOfCards; i++) {
      goDom.createCardBoilerplate(`NewCard${renderCounter}`);
      goDom.appendCardFromArray(`NewCard${renderCounter}`, container.array[i]);
      renderCounter++;
    }
  };

  const renderProjectCards = () => {
    let noOfProjects = projectContainer.array.length;
    console.log(noOfProjects);
    let projectRenderCounter = 0;

    for (let i = 0; i < noOfProjects; i++) {
      goDom.createProjectCardBoilerplate(`NewProj${projectRenderCounter}`);
      goDom.appendProjectCard(
        `NewProj${projectRenderCounter}`,
        projectContainer.array[i],
        projectContainer
      );
      projectRenderCounter++;
    }
    
  };

  return {
    renderToDoCards,
    appendProjectCard,
    renderProjectCards,
    changeTitle,
    createProjectCardBoilerplate,
    toggleFormVisibility,
    createNewBtn,
    createNewDiv,
    createNewDivInsideDiv,
    appendCardFromArray,
    createCardBoilerplate,
  };
};

// submit form logic
const formSubmit = () => {
  let submit = document.querySelector("#submitForm");
  let reset = document.querySelector("#resetForm");
  let formToDoTitle = document.querySelector("#title");
  let formToDoDesc = document.querySelector("#taskDesc");
  let formToDoDate = document.querySelector("#taskDate");
  let formToDoPrioLow = document.querySelector("#prioLow");
  let formToDoPrioMed = document.querySelector("#prioMed");
  let formToDoPrioHigh = document.querySelector("#prioHigh");
  let formToDoPrio;
  // counter is required to prevent new to do items for overriding existing elements
  let counter = container.array.length + 1;

  submit.addEventListener("click", (event) => {
    console.log("test");
    event.preventDefault();

    if (formToDoPrioLow === 1) {
      formToDoPrio = "LOW";
    } else if (formToDoPrioMed === 1) {
      formToDoPrio = "MED";
    } else {
      formToDoPrio = "HIGH";
    }

    let newItem = createNewTodo(
      formToDoTitle.value,
      formToDoDesc.value,
      formToDoDate.value,
      formToDoPrio
    );
    console.log(`NewCard${counter}`);
    console.log(newItem);
    createNewCard(newItem, `NewCard${counter}`);
    counter++;
    formReset(
      formToDoDate,
      formToDoTitle,
      formToDoDesc,
      formToDoPrioLow,
      formToDoPrioMed,
      formToDoPrioHigh
    );
  });

  reset.addEventListener("click", () => {
    console.log("Test");
    formReset(
      formToDoDate,
      formToDoTitle,
      formToDoDesc,
      formToDoPrioLow,
      formToDoPrioMed,
      formToDoPrioHigh
    );
  });
  return counter;
};

// function to create new project cards when button is pressed
const addNewProjectCard = () => {
  goDom.createNewBtn("header", "NewProject")
  let counterP = projectContainer.array.length;
  console.log(projectContainer.array);
  console.log(projectContainer.array.length);
  console.log(counterP);

  let btn = document.querySelector(".NewProject");
  btn.addEventListener("click", () => {
    let newProject = prompt("Enter the new project name");
    let newProjectItem = createNewProject(newProject, undefined);

    createNewProjectCard(newProjectItem, `NewProj${counterP}`);
    counterP++;
  });
  addList();
  return counterP;
};



// function for adding new items to array and creating cards easily
function createNewCard(contItem, cardName) {
  let arrLength = container.array.length;
  container.toDoContainer(contItem);
  goDom.createCardBoilerplate(cardName);
  goDom.appendCardFromArray(cardName, container.array[arrLength]);
}

//function for creating new project cards
function createNewProjectCard(contItem, projName) {
  let arrLength = projectContainer.array.length;
  projectContainer.toDoContainer(contItem);
  goDom.createProjectCardBoilerplate(projName);
  goDom.appendProjectCard(
    projName,
    projectContainer.array[arrLength],
    container
  );
}

//function to reset form
function formReset(
  formToDoDate,
  formToDoTitle,
  formToDoDesc,
  formToDoPrioLow,
  formToDoPrioMed,
  formToDoPrioHigh
) {
  formToDoDate.value = null;
  formToDoTitle.value = "";
  formToDoDesc.value = "";
  formToDoPrioLow.checked = false;
  formToDoPrioMed.checked = false;
  formToDoPrioHigh.checked = false;
}
// creates a content container for where all cards should live

// need to include this or nothing works
let container = toDoObjects();
let projectContainer = toDoObjects();
let goDom = domElementManipulation();
let formSub = formSubmit();
// let addProjCards = addNewProjectCard();
// let myProject = createNewProject("Sample", "Task");
// projectContainer.toDoContainer(myProject);

console.log(`Container items: ${projectContainer.array}`);
console.log(projectContainer.array);
console.log(projectContainer.array.length);
// let myProject2 = createNewProject("S2ample", "Task");
// projectContainer.toDoContainer(myProject2);
console.log(projectContainer.array.length);


function checkIfProjectsExist() {
  console.log(projectContainer.array);
  console.log(projectContainer.array.length);
}

// renders the home page
function renderHomePage() {
  goDom.changeTitle("Your active projects");
  createContentContainer();

  // goDom.createNewBtn("header", "NewProject");
  checkIfProjectsExist();
  let test = addNewProjectCard();
  test;
  goDom.renderProjectCards();
  // addProjCards;
}

/// renders the to do page
function renderToDoPage() {
  goDom.changeTitle("To Do List");
  createContentContainer();

  goDom.createNewBtn("header", "home");
  goDom.createNewBtn("header", "add");
  console.log(container);

  goDom.renderToDoCards();
  formSub;
  goDom.toggleFormVisibility();
}

renderHomePage();
addList();
console.log(projectContainer.array.length);
// renderToDoPage();
// addList2();

// testing changing pages

function addList2() {
  let home = document.querySelector(".home");
  home.addEventListener("click", () => {
    let title = document.querySelector("h1");
    if (title !== "Your active projects") {
      delContTd();
      console.log(container);
      renderHomePage();
      addList();
      console.log(container.array);
    } else return;
  });
}

function addList() {
  let openTest = document.querySelector(".OpenProject");
  if (openTest === null) {
    return;
  }
  openTest.addEventListener("click", () => {
    console.log("iwork");
    delCont();
    console.log(container);
    renderToDoPage();
    addList2();
  });
}

// //function to delete current container
function delCont() {
  let body = document.querySelector("body");
  let child = document.querySelector(".content");
  let header = document.querySelector("header");
  let childbutton = document.querySelector(".NewProject");

  body.removeChild(child);
  header.removeChild(childbutton);
}

// //function to delete to do content container
function delContTd() {
  let body = document.querySelector("body");
  let child = document.querySelector(".content");
  let header = document.querySelector("header");
  let childbutton = document.querySelector(".home");
  let addchildbutton = document.querySelector(".add");
  let form = document.querySelector("form");
  form.style.visibility = "hidden";
  form.style.height = "0";

  body.removeChild(child);
  header.removeChild(childbutton);
  header.removeChild(addchildbutton);
}
