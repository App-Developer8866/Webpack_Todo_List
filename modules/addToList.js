const addToList = (value, completed, index, toDoList) => {
  toDoList.push({ value, completed, index });
  return toDoList;
};

export default addToList;