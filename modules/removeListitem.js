const removeListitem = (index, toDoList) => {
  toDoList = toDoList.filter((i) => i.index !== index).map((i, index) => ({ ...i, index }));
  return toDoList;
};

export default removeListitem;