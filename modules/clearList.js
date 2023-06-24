import updateBookData from './updateBookData.js';
import displayLists from './displayLists.js';

const clearList = (taskList) => {
  let newArr = [];
  for(let a of taskList){
    if(a.completed !== true){
      newArr.push(a)
    }
  }
  for(let i=0; i<newArr.length; i++){
    newArr[i].index = i;
  }
  return newArr;
};

export default clearList;