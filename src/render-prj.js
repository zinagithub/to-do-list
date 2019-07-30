import { setMyToDoList, getMyToDoList, getMyCategories } from './local-storage';
import Project from './data.js'

export  const renderProjects = (catName) => {
  changeCatColor(catName)   
  renderTabToDo(catName)
  delFunction()
  updateFunction()
}

export const changeCatColor = (catName) => {
  var categories = getMyCategories()
  categories.forEach(function(val){
      let elm = document.getElementById(val);
      elm.style.background = "white";
  });
  if (categories.length > 0){
      const bt = document.getElementById(catName);
      bt.style.background = "red";
  }
}

const delFunction = () => {
  var allToDo = getMyToDoList();
  var delRowToDo = document.getElementsByClassName("cut");
  for (var i =0;i<delRowToDo.length;i++){
    let elmToCut = delRowToDo[i].id.toString().replace("cut","");
    delRowToDo[i].addEventListener('click', function() {
      const tdToDel = document.getElementById(elmToCut+"cut") ;
      tdToDel.parentNode.innerHTML = "";
      allToDo.splice(elmToCut,1);
      setMyToDoList(allToDo);
    })
  }
}

const updateFunction = (catName) => {
  var allToDo = getMyToDoList();
  var updateRowToDo = document.getElementsByClassName("update");
  for (var i =0;i<updateRowToDo.length;i++){
    let elmToUpdate = updateRowToDo[i].id.toString().replace("update","")
    updateRowToDo[i].addEventListener('click', function() {
    var toUpdate = allToDo[elmToUpdate]
    toUpdate.editToDo(elmToUpdate);
    // setMyToDoList(allToDo);
    //const newTd = document.getElementById(elmToUpdate+"update")
    //newTd.parentNode.firstChild = toUpdate.priority
    //renderTabToDo(catName)
    //const bodyItem = document.getElementById("body-item");
    //bodyItem.innerHTML= "";

    })
  }
}

const  renderTabToDo = (catName) =>{
  const bodyItem = document.getElementById("body-item");
  bodyItem.innerHTML = null;
  var allToDo = getMyToDoList();
  allToDo.forEach(function(val,index){
    if (val.categorie == catName){
      val.renderProject(index)
    }
  });
}