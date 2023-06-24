const removeListitem = (index, toDoList) => {
  let newArr = [];
  for(let a of toDoList){
    if(a.index !== parseInt(index)){
      newArr.push(a)
    }
  }
  for(let i=0; i<newArr.length; i++){
    newArr[i].index = i;
  }
  return newArr;
};

export default removeListitem;