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

  const createNewDivInsideDiv = (targetDiv, newDivClass) => {
    let target = document.querySelector(`.${targetDiv}`);
    let newDiv = document.createElement("div");
    newDiv.classList.add(newDivClass || "default");

    target.appendChild(newDiv);
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
    createNewDivInsideDiv(toDoName, "priority");
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

    title.textContent = "Title: " + sourceObject.toDoTitle;
    desc.textContent = "Details: " + sourceObject.toDoDetails;
    prio.textContent = "Priority: " + sourceObject.toDoPrio;
    date.textContent = "Due date: " + sourceObject.toDoDueDate;
    removeCard(target, sourceObject);
    taskStatus(target, sourceObject);
  };

  // removes click target from visible card (deletes dom object) and from array
  const removeCard = (target, sourceObject) => {
    let btn = target.querySelector('.Delete');
    btn.addEventListener('click', (e) => {
        
        console.log(btn.closest('div'));
        let child = btn.closest('div');
        content.removeChild(child);
        console.log(container.array.indexOf(sourceObject));
        container.array.splice(container.array.indexOf(sourceObject), 1);
        console.log(container.array);
 
    })
  };

  const taskStatus = (target, sourceObject) => {
    let btn = target.querySelector('.Done');
    btn.addEventListener('click', (e) => {
        if (sourceObject.toDoCompleted === true) {
            sourceObject.toDoCompleted = false;
            console.log(sourceObject.toDoCompleted);
        } else {
            sourceObject.toDoCompleted = true;
            console.log(sourceObject.toDoCompleted);
        }
        
 
    })
  }

  return {
    renderProjectCard,
    appendCardFromArray,
    createCardBoilerplate,
  };
};


// console testing stuff
let myItem = createNewTodo("Wash", "Was car", "today", "medium");
let myItem2 = createNewTodo("Clean", "Clean room", "tomorrow", "high");
myItem.print();
myItem2.print();

let container = toDoProject();

container.toDoContainer(myItem);
container.toDoContainer(myItem2);
console.log(container.array);

let goDom = domElementManipulation();

goDom.createCardBoilerplate("myCard");
goDom.appendCardFromArray("myCard", container.array[0]);
goDom.createCardBoilerplate("myCard2");
goDom.appendCardFromArray("myCard2", container.array[1]);
// goDom.renderProjectCard('project1');
// goDom.renderProjectCard('project2');
// goDom.renderProjectCard('project3');
