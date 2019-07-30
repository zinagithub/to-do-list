import './style.css';
import addCategorie from './add-categorie.js';
import delCategorie from './del-categorie.js';
import { getMyCategories } from './local-storage';
import createToDo from './create-todo.js';
import { renderProjects } from './render-prj';

let categories = getMyCategories();

var renderPage = function () {
  createHeader()
  renderAllProjects()
  createAddPrjButton()
  renderToDoFirstPrj()
}

function createHeader(){
  const but1 = document.getElementById('but1')
  but1.addEventListener('click', () => addCategorie());
}

function renderAllProjects(){
  const navCategories = document.getElementById("navCategories");
   categories = getMyCategories()
    categories.forEach(function(val){
      const item = document.createElement("button");
      item.id = val;
      item.innerHTML = val;
      item.classList.add("catButton")
      item.addEventListener('click', () => renderProjects(val));
      navCategories.appendChild(item);
    });

    if (categories.length > 0){
      const bt = document.getElementById(categories[0]);
      bt.style.background = "red";
    }

}

function renderToDoFirstPrj() {
  if (categories.length > 0) {
    let catName  = categories[0];
    renderProjects(catName);
  }
}

function createAddPrjButton(){
  if (categories.length > 0){
    if (document.getElementById("addPrj") === null) {
      const projectCat = document.getElementById("header");
      const prj = document.createElement("button");
      prj.id = "addPrj";
      prj.innerHTML = "To Do<i class='far fa-plus-square'></i>";
      projectCat.appendChild(prj);
      prj.addEventListener('click', () => createToDo());
    }
  } 
}
export default renderPage