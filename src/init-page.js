import './style.css';
import addCategorie from './add-categorie.js';
import delCategorie from './del-categorie.js';
import {getMyCategories} from './local-storage';
import createProjects from './create-projects.js';
import {renderProjects } from './render-prj';

let categories = getMyCategories();

var initPage = function (){
  
  createHeader()
  createNavigation()
  renderLocalCategories()
  createBodyItem()
  createAddPrjButton()
  renderProjectFirstCat()
}

function createHeader(){
  const content = document.getElementById('container');
  const newDiv = document.createElement("div");
  newDiv.id = "header";
  newDiv.classList.add("headerStyle");
  content.appendChild(newDiv);

  const elem = document.createElement("p");
  elem.innerHTML = "To-Do-List";
  newDiv.appendChild(elem);

  const but1 = document.createElement("button");
  but1.innerHTML = "Project <i class='far fa-plus-square'></i>";
  but1.addEventListener('click', () => addCategorie());
  newDiv.appendChild(but1);
  

  const but2 = document.createElement("button");
  but2.innerHTML = "Project <i class='far fa-minus-square'></i>";
  but2.addEventListener('click', () => delCategorie());
  newDiv.appendChild(but2);

}

function createNavigation(){
  const content = document.getElementById('container');
  const newDiv1 = document.createElement("div");
  newDiv1.id = "navCategories";
  newDiv1.style.width = "80%";
  newDiv1.style.height= "50px";
  newDiv1.style.margin = "20px auto";
  content.appendChild(newDiv1);
}

function renderLocalCategories(){
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
function createBodyItem(){
  const content = document.getElementById('container');
  const newDiv2 = document.createElement("div");
  newDiv2.id = "body-item";
  content.appendChild(newDiv2);
}
function renderProjectFirstCat(){
  if (categories.length > 0){
  let catName  = categories[0]
  renderProjects(catName);
  }
}

function createAddPrjButton(){
  if (categories.length > 0){
  if (document.getElementById("addPrj")== null){
      const projectCat = document.getElementById("header");
      const prj = document.createElement("button");
      prj.id = "addPrj";
      prj.innerHTML = "To Do<i class='far fa-plus-square'></i>";
      projectCat.appendChild(prj);
      prj.addEventListener('click', () => createProjects());
    }
   } 
}
export default initPage