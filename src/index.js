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


// console testing stuff
let myItem = createNewTodo("Wash", "Was car", "today", "medium");
let myItem2 = createNewTodo("Clean", "Clean room", "tomorrow", "high");
myItem.print();
myItem2.print();

let container = toDoProject();
container.toDoContainer(myItem);
container.toDoContainer(myItem2);
console.log(container.array);
