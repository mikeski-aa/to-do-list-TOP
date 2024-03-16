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

    const createNewDiv = (divName) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add(divName || 'default');
        content.appendChild(newDiv);
    }

    const createNewBtn = (targetAppend, btnTxt) => {
        let target = document.querySelector(`.${targetAppend}`);
        let btn = document.createElement('button');
        btn.textContent = btnTxt;

        target.appendChild(btn);

    }

    const createNewDivInsideDiv = (targetDiv, newDivClass) => {
        let target = document.querySelector(`.${targetDiv}`)
        let newDiv = document.createElement('div');
        newDiv.classList.add(newDivClass || 'default');

        target.appendChild(newDiv);
    }

    const renderProjectCard = (projectName) => {
        createNewDiv(projectName);
        createNewBtn(projectName, 'Open Project');
        createNewBtn(projectName, 'Delete Project');
    }

    const renderToDoCard = (toDoName) => {
        createNewDiv(toDoName);
        createNewDivInsideDiv(toDoName, 'title');
        createNewDivInsideDiv(toDoName, 'description');
        createNewDivInsideDiv(toDoName, 'priority');
        createNewDivInsideDiv(toDoName, 'date');
        createNewBtn(toDoName, 'Done');
        createNewBtn(toDoName, 'Delete');


    }

    const appendCardFromArray = (targetCard, sourceObject) => {
        let target = document.querySelector(`.${targetCard}`);
        let title = target.querySelector('.title');
        let desc = target.querySelector('.description');
        let prio = target.querySelector('.priority');
        let date = target.querySelector('.date');
   
        title.textContent = sourceObject.toDoTitle;
        desc.textContent = sourceObject.toDoDetails;
        prio.textContent = sourceObject.toDoPrio;
        date.textContent = sourceObject.toDoDueDate;

    }

    return {
        renderProjectCard,
        appendCardFromArray,
        renderToDoCard
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
console.log(container.array[0].toDoTitle);

let goDom = domElementManipulation();
goDom.renderToDoCard('myCard');
goDom.appendCardFromArray('myCard', container.array[0]);
goDom.renderToDoCard('myCard2');
goDom.appendCardFromArray('myCard2', container.array[1]);
// goDom.renderProjectCard('project1');
// goDom.renderProjectCard('project2');
// goDom.renderProjectCard('project3');
