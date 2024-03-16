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

// storing objects in an array, all to do lists live within their own project
// additional array manipulation methods need to be added here - i.e removing items from array
const toDoProject = () => {
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

//dom manipulation to be done here
const domElementManipulation = () => {
  const content = document.querySelector(".content");

  const createNewDiv = (divName) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add(divName || "default");
    content.appendChild(newDiv);
  };

  const createNewBtn = (targetAppend, btnTxt) => {
    let target = document.querySelector(`.${targetAppend}`);
    let btn = document.createElement("button");
    btn.classList.add(`${btnTxt}`);
    btn.textContent = btnTxt;

    target.appendChild(btn);
  };

  // creates a div inside div with additional functionality to create a paragraph within subsequent div
  const createNewDivInsideDiv = (targetDiv, newDivClass, targetOfTarget) => {
    if (targetOfTarget !== undefined) {
      let target = document.querySelector(`.${targetDiv}`);
      let targetOT = target.querySelector(`.${targetOfTarget}`);
      let newDiv = document.createElement("p");
      newDiv.classList.add(newDivClass || "default");
      targetOT.appendChild(newDiv);
    } else {
      let target = document.querySelector(`.${targetDiv}`);
      let newDiv = document.createElement("div");
      newDiv.classList.add(newDivClass || "default");

      target.appendChild(newDiv);
    }
  };

  const renderProjectCard = (projectName) => {
    createNewDiv(projectName);
    createNewBtn(projectName, "Open Project");
    createNewBtn(projectName, "Delete Project");
  };

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

  return {
    renderProjectCard,
    appendCardFromArray,
    createCardBoilerplate,
  };
};

// submit form logic
const formSubmit = () => {
  let submit = document.querySelector("#submitForm");
  let reset = document.querySelector('#resetForm')
  let formToDoTitle = document.querySelector("#title");
  let formToDoDesc = document.querySelector("#taskDesc");
  let formToDoDate = document.querySelector("#taskDate");
  let formToDoPrioLow = document.querySelector("#prioLow");
  let formToDoPrioMed = document.querySelector("#prioMed");
  let formToDoPrioHigh = document.querySelector("#prioHigh");
  let formToDoPrio;
  // counter is arbitrary but required to keep cards from overriding each other
  let counter = 0;

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

    createNewCard(newItem, `NewCard${counter}`);
    counter++;
    formReset(formToDoDate, formToDoTitle, formToDoDesc, formToDoPrioLow, formToDoPrioMed, formToDoPrioHigh);
  });

  reset.addEventListener("click", () => {
    console.log('Test');
    formReset(formToDoDate, formToDoTitle, formToDoDesc, formToDoPrioLow, formToDoPrioMed, formToDoPrioHigh);
  })
  return counter;
};

// function for adding new items to array and creating cards easily
function createNewCard(contItem, cardName) {
  let arrLength = container.array.length;
  container.toDoContainer(contItem);
  goDom.createCardBoilerplate(cardName);
  goDom.appendCardFromArray(cardName, container.array[arrLength]);
}

//function to reset form 
function formReset(formToDoDate, formToDoTitle, formToDoDesc, formToDoPrioLow, formToDoPrioMed, formToDoPrioHigh){
    formToDoDate.value = null;
    formToDoTitle.value = '';
    formToDoDesc.value = '';
    formToDoPrioLow.checked = false;
    formToDoPrioMed.checked = false;
    formToDoPrioHigh.checked = false;
}

// console testing stuff
let myItem = createNewTodo("Wash", "Wash car", "today", "medium");
let myItem2 = createNewTodo("Clean", "Clean room", "tomorrow", "high");
let myItem3 = createNewTodo("Wash", "Wash car", "today", "medium");
let myItem4 = createNewTodo("Clean", "Clean room", "tomorrow", "high");
let myItem5 = createNewTodo("Wash", "Wash car", "today", "medium");
let myItem6 = createNewTodo("Clean", "Clean room", "tomorrow", "high");
myItem.print();
myItem2.print();

let container = toDoProject();

// container.toDoContainer(myItem);
// container.toDoContainer(myItem2);
console.log(container.array);

let goDom = domElementManipulation();
createNewCard(myItem, "myItem");
createNewCard(myItem2, "myItem2");
// createNewCard(myItem3, "myItem3");
// createNewCard(myItem4, "myItem4");
// createNewCard(myItem5, "myItem5");
// createNewCard(myItem6, "myItem6");

let formSub = formSubmit();
formSub;

// goDom.createCardBoilerplate("myCard");
// goDom.appendCardFromArray("myCard", container.array[0]);
// goDom.createCardBoilerplate("myCard2");
// goDom.appendCardFromArray("myCard2", container.array[1]);

// goDom.renderProjectCard('project1');
// goDom.renderProjectCard('project2');
// goDom.renderProjectCard('project3');
