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

// holder for created to dos within a project
const holder = (id, toDoItems) => {
  const objectID = id;
  const objectItem = toDoItems;

  return {
  
    objectID,
    objectItem
  };
};

//factory function for creation of new projects which are to go into projects array

const createNewProject = (title, id) => {
  const projectTitle = title;
  const projectID = id;
  const firstOpen = true;
  // const projectFirstTask = task;

  return {
    projectTitle,
    id,
    firstOpen,
    // task,
  };
};
// storing objects in an array, all to do lists live within their own project

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
  const removeProjectCard = (targetCard, sourceObject) => {
    let btn = targetCard.querySelector(".DeleteProject");
    let content = document.querySelector(".content");

    btn.addEventListener("click", (e) => {
      let child = btn.closest("div");
      content.removeChild(child);
      projectContainer.array.splice(
        projectContainer.array.indexOf(sourceObject),
        1
      );
    });
  };

  // open project button
  const openProjectCard = (targetCard, sourceObject) => {
    let openTest = targetCard.querySelector(".OpenProject");
    openTest.addEventListener("click", () => {
      delCont();
      alert(sourceObject.id)
      alert(sourceObject.firstOpen);
      console.log(testHolder.get(sourceObject.id))

      if (testHolder.has(sourceObject.id) === false) {alert('nothing mapped yet')} else {
        // let container = testHolder.get(sourceObject.id);
        // renderToDoPage(sourceObject.id, container);
        
      }

      renderToDoPage(sourceObject.id, testHolder.get(sourceObject.id));

      // renderToDoPage(sourceObject.id);
      // console.log(`231232322 tempID object is: --`+tempID)
      return;
    });
  };



  // append project card
  const appendProjectCard = (targetCard, sourceObject, sourceContainer) => {
    let target = document.querySelector(`.${targetCard}`);
    let projectTitle = target.querySelector(".projectTitle");
    let firstItem = target.querySelector(".firstItem");
    projectTitle.textContent = sourceObject.projectTitle;

    // prevents errors when project is empty and you go back
    // if (sourceContainer.array.length !== 0) {
    //   firstItem.textContent =
    //     sourceContainer.array[0].toDoTitle +
    //     " , " +
    //     sourceContainer.array[0].toDoDueDate;
    // }

    openProjectCard(target, sourceObject);
    removeProjectCard(target, sourceObject);
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
  const appendCardFromArray = (targetCard, sourceObject, container) => {
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
    removeCard(target, sourceObject, container);
    taskStatus(target, sourceObject, container);
  };

  // removes click target from visible card (deletes dom object) and from array
  const removeCard = (target, sourceObject, container) => {
    let content = document.querySelector(".content");
    let btn = target.querySelector(".Delete");
    btn.addEventListener("click", (e) => {
      let child = btn.closest("div");
      content.removeChild(child);

      container.array.splice(container.array.indexOf(sourceObject), 1);
    });
  };
  // enables task status toggle on card and within array
  const taskStatus = (target, sourceObject) => {
    let btn = target.querySelector(".Done");
    btn.addEventListener("click", (e) => {
      if (sourceObject.toDoCompleted === true) {
        sourceObject.toDoCompleted = false;
      } else {
        sourceObject.toDoCompleted = true;
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

  const renderToDoCards = (container) => {
    let noOfCards = container.array.length;

    let renderCounter = 0;

    for (let i = 0; i < noOfCards; i++) {
      goDom.createCardBoilerplate(`NewCard${renderCounter}`);
      goDom.appendCardFromArray(`NewCard${renderCounter}`, container.array[i], container);
      renderCounter++;
    }
  };

  const renderProjectCards = () => {
    let noOfProjects = projectContainer.array.length;

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
  //experiment with a function to create new project names

  function newProjectName(){
  
  }

// submit form logic
const formSubmit = (container) => {
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

    createNewCard(newItem, `NewCard${counter}`, container);
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
// this function needs to check for project ID ?
const addNewProjectCard = () => {
  goDom.createNewBtn("header", "NewProject");
  let counterP = projectContainer.array.length;
  

  let btn = document.querySelector(".NewProject");
  btn.addEventListener("click", () => {
    console.log(`counter is at `+counterP);
    let newProject = prompt("Enter the new project name");
    let newProjectItem = createNewProject(newProject, counterP);
  
    createNewProjectCard(newProjectItem, `NewProj${counterP}`);
    counterP++;
  });

  return counterP;
};

// function for adding new items to array and creating cards easily
function createNewCard(contItem, cardName, container) {
  let arrLength = container.array.length;
  container.toDoContainer(contItem);
  goDom.createCardBoilerplate(cardName);
  goDom.appendCardFromArray(cardName, container.array[arrLength], container);
}

//function for creating new project cards
function createNewProjectCard(contItem, projName) {
  let arrLength = projectContainer.array.length;
  projectContainer.toDoContainer(contItem);
  goDom.createProjectCardBoilerplate(projName);
  goDom.appendProjectCard(
    projName,
    projectContainer.array[arrLength]
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

// let addProjCards = addNewProjectCard();
// let myProject = createNewProject("Sample", "Task");
// projectContainer.toDoContainer(myProject);

// let myProject2 = createNewProject("S2ample", "Task");
// projectContainer.toDoContainer(myProject2);

function checkIfProjectsExist() {}

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

// function to delete current container
function delCont() {
  let body = document.querySelector("body");
  let child = document.querySelector(".content");
  let header = document.querySelector("header");
  let childbutton = document.querySelector(".NewProject");

  body.removeChild(child);
  header.removeChild(childbutton);
}

// takes back to main menu, clears pervious page
function backToMainMenu(sourceObjectID, container) {
  let home = document.querySelector(".home");
  home.addEventListener("click", () => {
    let title = document.querySelector("h1");
    if (title !== "Your active projects") {
      console.log(`source project id is `+sourceObjectID);
   
      testHolder.delete(sourceObjectID);
      testHolder.set(sourceObjectID, container);
      console.log(container.array);
      console.log(sourceObjectID.array);
      console.log(testHolder);
      console.log(testHolder.get(sourceObjectID));
      // holderArr.push(testArr);
      delContTd();

      renderHomePage(sourceObjectID);
      console.log(testArr);
      
      // console.log(holderArr);
      return (sourceObjectID.array);
    } else return;
  });
}

// renders the home page
function renderHomePage(sourceObjectID) {

  goDom.changeTitle("Your active projects");
  createContentContainer();
  console.log(sourceObjectID);
  let arr = [];
  arr.push(sourceObjectID);
  console.log(arr);
  // goDom.createNewBtn("header", "NewProject");
  checkIfProjectsExist();
  let test = addNewProjectCard();
  test;
  goDom.renderProjectCards();
  // addProjCards;
}

// need to include this or nothing works

let projectContainer = toDoObjects();
let goDom = domElementManipulation();
let newHolder = holder(25, 'this');
// let container = toDoObjects(); 
// let formSub = formSubmit(container); 
const testHolder = new Map();
// console.log(newHolder);
// console.log(newHolder.objectID);
// console.log(newHolder.objectItem);
// let newerHolder = holder(2, 'that');
let testArr = [];
let holderArr = [];
console.log(holderArr.length);

// testArr.push(newHolder);
// console.log(testArr);
// testArr.push(newerHolder);
// console.log(testArr);

// console.log('at array 0 the id is '+testArr[0].objectID);


/// renders the to do page
function renderToDoPage(sourceObjectID, holderInput) {
  let newContID = sourceObjectID;
  newContID = toDoObjects();
  let container = newContID;
  if (holderInput !== undefined) {container = holderInput}
  let formSub = formSubmit(container); 
  console.log(`keep testing this shit ` + container);
  goDom.changeTitle("To Do List");
  createContentContainer();

  goDom.createNewBtn("header", "home");
  goDom.createNewBtn("header", "add");

  goDom.renderToDoCards(container);
 
  goDom.toggleFormVisibility();
  backToMainMenu(sourceObjectID, container);
}

renderHomePage();
// addList();
console.log(projectContainer.array.length);
// renderToDoPage();
// addList2();

// testing changing pages

// function addList() {
//   let openTest = document.querySelector(".OpenProject");
//   if (openTest === null) {
//     return;
//   }
//   openTest.addEventListener("click", () => {
//     console.log("iwork");
//     delCont();
//     console.log(container);
//     renderToDoPage();
//     addList2();
//   });
// }
