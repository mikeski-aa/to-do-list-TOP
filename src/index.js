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

  // function toDoContainer(myItem) {
  //   array.push(myItem);
  // }

  return {
    // toDoContainer,
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

  const createNewBtnInsideDiv = (targetAppend, btnTxt) => {
    let target = targetAppend.querySelector(".buttons")

    let btn = document.createElement("button");
    btn.classList.add(`${btnTxt}`);
    target.appendChild(btn);
  }

  // creates a div inside div with additional functionality to create a paragraph within subsequent div
  const createNewDivInsideDiv = (targetDiv, newDivClass) => {
    let target = document.querySelector(`.${targetDiv}`);
    let newDiv = document.createElement("div");
    newDiv.classList.add(newDivClass);
    target.appendChild(newDiv);
  };
  // this should create new paragraph inside div
  const createNewParaInsideDiv = (targetParentDiv, targetDiv, newDivClass) => {
    let targetParent = document.querySelector(`.${targetParentDiv}`);
    let target = targetParent.querySelector(`.${targetDiv}`);
    let newP = document.createElement("p");
    newP.classList.add(newDivClass);
    target.appendChild(newP);
  };

  //this should create new div inside new div
  const createNewTitleInsideDiv = (targetDiv, newDivClass) => {
    let target = document.querySelector(`.${targetDiv}`);
    let newDiv = document.createElement("h3");
    newDiv.classList.add(newDivClass);
    target.appendChild(newDiv);
  };

  // creates an empty project card boilerplate
  const createProjectCardBoilerplate = (projectName) => {
    createNewDiv(projectName);

    createNewTitleInsideDiv(projectName, "projectTitle");
    createNewDivInsideDiv(projectName, "firstItem");
    createNewDivInsideDiv(projectName, "secondItem");
    createNewDivInsideDiv(projectName, "thirdItem");

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
      console.log(sourceObject.id);
      toDoMap.delete(sourceObject.id);
      setToDoStorage();
      console.log(toDoMap);
      projectContainer.array.splice(
        projectContainer.array.indexOf(sourceObject),
        1
      );
      setContainer();
    });
  };

  // open project button
  const openProjectCard = (targetCard, sourceObject) => {
    let openProjCard = targetCard.querySelector(".OpenProject");
    openProjCard.addEventListener("click", () => {
      delCont();
      // alert(sourceObject.id);
      // alert(sourceObject.firstOpen);
      console.log(toDoMap.get(sourceObject.id));

      if (toDoMap.has(sourceObject.id) === false) {
        // alert("nothing mapped yet");
        toDoMap.set(sourceObject.id);
        console.log(toDoMap);
        let container = toDoObjects();
        renderToDoPage(sourceObject.id, container);
      } else {
        renderToDoPage(sourceObject.id, toDoMap.get(sourceObject.id));
      }

      return;
    });
  };

  // append project card
  // if statement displays up to 3 of the projects in the card
  const appendProjectCard = (targetCard, sourceObject, sourceContainer) => {
    let target = document.querySelector(`.${targetCard}`);
    let projectTitle = target.querySelector(".projectTitle");
    let firstItem = target.querySelector(".firstItem");
    let secondItem = target.querySelector(".secondItem");
    let thirdItem = target.querySelector(".thirdItem");
    projectTitle.textContent = sourceObject.projectTitle;
    console.log(sourceObject.id);

    if (
      toDoMap.has(sourceObject.id) &&
      toDoMap.get(sourceObject.id).array.length > 2
    ) {
      firstItem.textContent =
        toDoMap.get(sourceObject.id).array[0].toDoTitle +
        " DUE ON: " +
        toDoMap.get(sourceObject.id).array[0].toDoDueDate;
      secondItem.textContent =
        toDoMap.get(sourceObject.id).array[1].toDoTitle +
        " DUE ON: " +
        toDoMap.get(sourceObject.id).array[1].toDoDueDate;
      thirdItem.textContent =
        toDoMap.get(sourceObject.id).array[2].toDoTitle +
        " DUE ON: " +
        toDoMap.get(sourceObject.id).array[2].toDoDueDate;
    } else if (
      toDoMap.has(sourceObject.id) &&
      toDoMap.get(sourceObject.id).array.length > 1
    ) {
      firstItem.textContent =
        toDoMap.get(sourceObject.id).array[0].toDoTitle +
        " DUE ON: " +
        toDoMap.get(sourceObject.id).array[0].toDoDueDate;
      secondItem.textContent =
        toDoMap.get(sourceObject.id).array[1].toDoTitle +
        " DUE ON: " +
        toDoMap.get(sourceObject.id).array[1].toDoDueDate;
    } else if (
      toDoMap.has(sourceObject.id) &&
      toDoMap.get(sourceObject.id).array.length > 0
    ) {
      firstItem.textContent =
        toDoMap.get(sourceObject.id).array[0].toDoTitle +
        " DUE ON: " +
        toDoMap.get(sourceObject.id).array[0].toDoDueDate;
    } else {
      firstItem.textContent = "To Do item 1" + " DUE ON: " + "Due Date 1";
      secondItem.textContent = "To Do item 2" + " DUE ON: " + "Due Date 2";
      thirdItem.textContent = "To Do item 3" + " DUE ON: " + "Due Date 3";
    }

    openProjectCard(target, sourceObject);
    removeProjectCard(target, sourceObject);
  };

  // creates an empty boilerplate card to be filled with user values
  const createCardBoilerplate = (toDoName) => {
    createNewTitleInsideDiv(toDoName, "title");

    createNewDivInsideDiv(toDoName, "description");
    createNewParaInsideDiv(toDoName, "description", "descTemp");
    createNewParaInsideDiv(toDoName, "description", "descVal");

    createNewDivInsideDiv(toDoName, "priority");
    createNewParaInsideDiv(toDoName, "priority", "prioTemp");
    createNewParaInsideDiv(toDoName, "priority", "prioVal");

    createNewDivInsideDiv(toDoName, "date");

    createNewDivInsideDiv(toDoName, "buttons");
    createNewBtn(toDoName, "Done");
    createNewBtn(toDoName, "Delete");
    createNewBtn(toDoName, "Edit");
    createNewBtn(toDoName, "Save");

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

    title.textContent = sourceObject.toDoTitle;

    descTitle.textContent = "Details: ";
    descCont.textContent = sourceObject.toDoDetails;

    prioTitle.textContent = "Priority: ";
    prioCont.textContent = sourceObject.toDoPrio;

    date.textContent = "Due date: " + sourceObject.toDoDueDate;
    removeCard(target, sourceObject, container);
    taskStatus(target, sourceObject, container);
    editToDo(target, sourceObject);
    saveToDo(target, sourceObject, container);
  };

  // removes click target from visible card (deletes dom object) and from array
  const removeCard = (target, sourceObject, container) => {
    let content = document.querySelector(".content");
    let btn = target.querySelector(".Delete");
    btn.addEventListener("click", (e) => {
      let child = btn.closest("div");
      content.removeChild(child);
      container.array.splice(container.array.indexOf(sourceObject), 1);
      toDoMap.set(sourceObject.id, container);
      setToDoStorage();
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

  // edit buttons lets you edit stuff on the card
  const editToDo = (target, sourceObject) => {
    let btn = target.querySelector(".Edit")
    btn.addEventListener("click", (e) => {
      let parent = btn.closest('div')
      let descVal = parent.querySelector('.descVal');
      let titleVal = parent.querySelector('.title');
      descVal.contentEditable = true;
      titleVal.contentEditable = true;
      descVal.style.backgroundColor = "#dddbdb";
      titleVal.style.backgroundColor = "#dddbdb";
    })
  }

// save edit
  const saveToDo = (target, sourceObject, container) => {
    let btn = target.querySelector(".Save");
    btn.addEventListener("click", (e) => {
      let parent = btn.closest('div')
      let descVal = parent.querySelector('.descVal');
      let titleVal = parent.querySelector('.title');
      descVal.contentEditable = false;
      titleVal.contentEditable = false;
      sourceObject.toDoDetails = descVal.textContent;
      sourceObject.toDoTitle = titleVal.textContent;
      toDoMap.set(sourceObject.id, container);
      setToDoStorage();


    })
  }


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
  // changes page title
  const changeTitle = (newTitle) => {
    let title = document.querySelector("h1");
    title.textContent = newTitle;
  };

  // this will delete all cards in container
  const clearCards = () => {
    let body = document.querySelector("body");
    let child = document.querySelector(".content");
    body.removeChild(child);
    createContentContainer();
  };

  // this function renders all cards from the container array
  // in the future i need to add functionality for switching between arrays otherwise only first project will work correctly.

  const renderToDoCards = (container) => {
    // alert(container.array.length + "The length of the container array is this");
    clearCards();
    let noOfCards = container.array.length;

    let renderCounter = 0;

    for (let i = 0; i < noOfCards; i++) {
      createNewDiv(`NewCard${i}`);
      goDom.createCardBoilerplate(`NewCard${i}`);
      goDom.appendCardFromArray(`NewCard${i}`, container.array[i], container);
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

// submit form logic
function formSubmit(container, sourceObjectID) {
  console.log("source object ID is " + sourceObjectID);
  console.log(toDoMap.get(sourceObjectID));

  let formToDoTitle = document.querySelector("#title");
  let formToDoDesc = document.querySelector("#taskDesc");

  let formToDoDate = document.querySelector("#taskDate");

 // converts date to EU date format 
  let euDate = formToDoDate.value.split('-')
  euDate = (euDate[2]+ '-' + euDate[1] + '-' + euDate[0]);
  console.log(euDate);

  let formToDoPrioLow = document.querySelector("#prioLow");
  let formToDoPrioMed = document.querySelector("#prioMed");
  let formToDoPrioHigh = document.querySelector("#prioHigh");
  let formToDoPrio;
  //check for empty, if empty throw error and stop action
  console.log(formToDoTitle.value);
  console.log(`Today date value ` + formToDoDate.value);
  console.log(formToDoPrioLow.value);
  console.log(formToDoPrioMed.value);
  console.log(formToDoPrioHigh.value);

  // checking to make sure correct form submission format is followed
  if (formToDoTitle.value == "") {
    alert("Title cannot be empty!");
    return;
  } else if (formToDoDate.value == "") {
    alert("Date cannot be empty!");
    return;
  } else if (+formToDoDate.value.split("-")[0] > +taskDate.max.split("-")[0]) {
    alert("Due date cannot be more than 1 year in the future!");
    return;
  } else if (+formToDoDate.value.split("-")[0] < +taskDate.min.split("-")[0]) {
    alert("Due date cannot be before today!");
    return;
  }

  // checking to make sure at least one priority is selected
  if (
    formToDoPrioLow.checked === false &&
    formToDoPrioMed.checked === false &&
    formToDoPrioHigh.checked === false
  ) {
    alert("You must select one task priority!");
    return;
  }

  // for setting priority depending on buttons pressed
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
    euDate,
    formToDoPrio
  );

  container.array.push(newItem);
  goDom.renderToDoCards(container);
  toDoMap.set(sourceObjectID, container);
  setToDoStorage();
  // createNewCard(newItem, `NewCard${counter}`, container);

  formReset(
    formToDoDate,
    formToDoTitle,
    formToDoDesc,
    formToDoPrioLow,
    formToDoPrioMed,
    formToDoPrioHigh
  );

  console.log(`The current container length is: ${container.array.length}`);
  return;
}

// function to create new project cards when button is pressed
// this function needs to check for project ID ?
const addNewProjectCard = () => {
  goDom.createNewBtn("header", "NewProject");
  let counterP = projectContainer.array.length;

  let btn = document.querySelector(".NewProject");
  btn.addEventListener("click", () => {
    console.log(`counter is at ` + counterP);
    let newProject = prompt("Enter the new project name");
    // if (prompt())
    if (newProject === null) {
      return;
    }

    if (newProject === "") {
      alert("You must enter a project name");
      return;
    }

    let newProjectItem = createNewProject(newProject, counterP);

    createNewProjectCard(newProjectItem, `NewProj${counterP}`);
    counterP++;
    setContainer();
  });

  return counterP;
};

//function for creating new project cards
function createNewProjectCard(contItem, projName) {
  console.log(projectContainer);
  let arrLength = projectContainer.array.length;
  projectContainer.array.push(contItem);
  goDom.createProjectCardBoilerplate(projName);
  goDom.appendProjectCard(projName, projectContainer.array[arrLength]);
}

//function to reset form
function formReset() {
  let formToDoTitle = document.querySelector("#title");
  let formToDoDesc = document.querySelector("#taskDesc");
  let formToDoDate = document.querySelector("#taskDate");
  let formToDoPrioLow = document.querySelector("#prioLow");
  let formToDoPrioMed = document.querySelector("#prioMed");
  let formToDoPrioHigh = document.querySelector("#prioHigh");

  formToDoDate.value = null;
  formToDoTitle.value = "";
  formToDoDesc.value = "";
  formToDoPrioLow.checked = false;
  formToDoPrioMed.checked = false;
  formToDoPrioHigh.checked = false;
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
  let title = document.querySelector("h1");

  if (title !== "Your active projects") {
    console.log(`source project id is ` + sourceObjectID);

    toDoMap.delete(sourceObjectID);
    toDoMap.set(sourceObjectID, container);
    console.log(toDoMap);
    console.log(toDoMap.get(sourceObjectID).array[0]);
    setToDoStorage();

    delContTd();

    renderHomePage(sourceObjectID);

    return sourceObjectID.array;
  } else return;
}

// function set min and max current dates
function setMinMaxDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  year = year + 1;

  if (month < 10) {
    month = "0" + `${month}`;
  }

  let maxDate = `${year}-${month}-${day}`;

  //sets max date to current date + 1 year;
  taskDate.max = maxDate;

  // sets min dat to current date
  taskDate.min = new Date().toISOString().split("T")[0];
}

// renders the home page  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function renderHomePage(sourceObjectID) {
  goDom.changeTitle("Your active projects");
  createContentContainer();
  console.log(sourceObjectID);

  // goDom.createNewBtn("header", "NewProject");

  let addNewProjectCardHere = addNewProjectCard();
  addNewProjectCardHere;
  goDom.renderProjectCards();
}

/// renders the to do page - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function renderToDoPage(sourceObjectID, holderInput) {
  let container = holderInput;

  // let container = toDoObjects();

  goDom.changeTitle("To Do List");
  createContentContainer();
  console.log(`The current container length is: ${container.array.length}`);
  goDom.createNewBtn("header", "home");
  goDom.createNewBtn("header", "add");

  goDom.renderToDoCards(container);
  goDom.toggleFormVisibility();

  // go back home
  let home = document.querySelector(".home");
  home.addEventListener("click", () => {
    backToMainMenu(sourceObjectID, container);
  });

  // handles submission of form
  let submit = document.querySelector("#submitForm");
  submit.onclick = function (event) {
    event.preventDefault();
    formSubmit(container, sourceObjectID);
  };

  // handles form reset
  let reset = document.querySelector("#resetForm");
  reset.onclick = function () {
    formReset();
  };

  // set current time for today to prevent selection of dates earlier than toady
  setMinMaxDate();
  console.log(taskDate.min.split(`-`)[0]);

  console.log(container);
}

// localstorage testing

function checkProjectStorage() {
  if (localStorage.getItem("ProjectStore") === null) {
    console.log("localStorage is empty");
    let testCont = toDoObjects();
    return (projectContainer = testCont);
  } else {
    let projectcontainer_serializd = localStorage.getItem("ProjectStore");
    let projectcontainer_normal = JSON.parse(projectcontainer_serializd);

    return (projectContainer = projectcontainer_normal);
  }
}

// // storing projectcontainer in local data

function setContainer() {
  let projectcontainer_serializd = JSON.stringify(projectContainer);
  localStorage.setItem("ProjectStore", projectcontainer_serializd);
  console.log(`Proj Container should look like this: ` + projectContainer);
  console.log(localStorage);
  // localStorage.removeItem('1');
}

// function to check if to do items exist
function checkToDoStorage() {
  if (localStorage.myMap === undefined) {
    console.log("localStorage To Do is empty");
    let testCont = new Map();
    return (toDoMap = testCont);
  } else {
    let toDoMap_normal;
    toDoMap_normal = new Map(JSON.parse(localStorage.myMap));
    return (toDoMap = toDoMap_normal);
  }
}

//function to save state of current to do projects
function setToDoStorage() {
  localStorage.myMap = JSON.stringify(Array.from(toDoMap.entries()));
  console.log("To Do list saved successfully");
}

function deleteToDoStorage() {
  localStorage.removeItem("myMap");
  console.log(localStorage);
}

// for testing purposes / removing stored elements
// localStorage.removeItem("ProjectStore");
// localStorage.removeItem("ToDoStorage");
// localStorage.removeItem("myMap");


// sets variables to be used throughout the application for storing the map and project container
let projectContainer;
let toDoMap;

// Object.setPrototypeOf(projectContainer, toDoObjects)

// checking storage whether any saved values are present
// if not present, render new values
checkToDoStorage();
checkProjectStorage();

// need to include this or nothing works  - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - -
let goDom = domElementManipulation();
// renders home page for start of website

renderHomePage();

// date manipulation tryout

let newDate = new Date;
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());