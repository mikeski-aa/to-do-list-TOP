import "./style.css";

// factory function to create a new to-do object

const createNewTodo = (title, details, dueDate, prio) => {
  const toDoTitle = title;
  const toDoDetails = details;
  const toDoDueDate = dueDate;
  const toDoPrio = prio;

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
    const content = document.querySelector('.content');

    const createProjectDiv = (projectName) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add(projectName || 'default');
        content.appendChild(newDiv);
    }

    const createProjectCardBtn = (targetAppend, btnTxt) => {
        let target = document.querySelector(`.${targetAppend}`);
        let btn = document.createElement('button');
        btn.textContent = btnTxt;

        target.appendChild(btn);

    }

    const renderProjectCard = (projectName) => {
        createProjectDiv(projectName);
        createProjectCardBtn(projectName, 'Open Project');
        createProjectCardBtn(projectName, 'Delete Project');
    }

    return {
        renderProjectCard
    }
}


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
goDom.renderProjectCard('project1');
goDom.renderProjectCard('project2');
goDom.renderProjectCard('project3');
