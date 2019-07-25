//export { setCategories , getMyCategories}
import Project from './data.js'

export const setCategories = (catArr) => {
  let myCategories_serialized =JSON.stringify(catArr)
  localStorage.setItem("categories",myCategories_serialized);
}

export const getMyCategories = () => {
  let myCategories_deserialized = []
  if (localStorage.getItem("categories")) {
    myCategories_deserialized = JSON.parse(localStorage.getItem("categories"));
  }
  return myCategories_deserialized
}

export const setMyToDoList = (myToDoList) => {
  let myToDoList_serialized =JSON.stringify(myToDoList)
  localStorage.setItem("myToDoList",myToDoList_serialized);
}

export const getMyToDoList = () => {
  let myToDoList_deserialized = [];
  if (localStorage.getItem("myToDoList")) {
    myToDoList_deserialized = JSON.parse(localStorage.getItem("myToDoList")).map((toDo) =>
      Object.assign(new Project(), toDo),
    );
  }
	return myToDoList_deserialized
}