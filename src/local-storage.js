import Project from './data';

export const setCategories = (catArr) => {
  const myCategoriesSerialized = JSON.stringify(catArr);
  localStorage.setItem('categories', myCategoriesSerialized);
};

export const getMyCategories = () => {
  let myCategoriesDeserialized = [];
  if (localStorage.getItem('categories')) {
    myCategoriesDeserialized = JSON.parse(localStorage.getItem('categories'));
  }
  return myCategoriesDeserialized;
};

export const setMyToDoList = (myToDoList) => {
  const myToDoListSerialized = JSON.stringify(myToDoList);
  localStorage.setItem('myToDoList', myToDoListSerialized);
};

export const getMyToDoList = () => {
  let myToDoListDeserialized = [];
  if (localStorage.getItem('myToDoList')) {
    myToDoListDeserialized = JSON.parse(localStorage.getItem('myToDoList')).map((toDo) => Object.assign(new Project(), toDo));
  }
  return myToDoListDeserialized;
};
