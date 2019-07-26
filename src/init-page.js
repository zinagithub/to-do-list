import addCategorie from './add-categorie.js';
import delCategorie from './del-categorie.js';
import {getMyCategories} from './local-storage';
import createProjects from './create-projects.js';
import renderProjects from './render-prj.js';
//import categories  from './data.js';
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
  newDiv.style.width = "80%";
  newDiv.style.height= "50px";
  //newDiv.style.background = "black";
  newDiv.style.border = "1px solid #900";
  newDiv.style.borderRadius = "15px";
  newDiv.style.margin = "0 auto";
  newDiv.style.color = "gray";
  content.appendChild(newDiv);
  const elem = document.createElement("p");
  elem.innerHTML = "To-Do-List";
  elem.style.textAlign = "left";
  elem.style.marginTop = "5px";
  elem.style.marginLeft = "5px";
  elem.style.fontSize = "35px";
  elem.style.display = "inline-block";
  newDiv.appendChild(elem);

  const but1 = document.createElement("button");
  but1.innerHTML = "Project <i class='far fa-plus-square'></i>";
  but1.style.fontSize = "15px";
  but1.style.float = "right";
  but1.style.margin = "3px 10px auto";
  but1.style.padding = "10px";
  but1.addEventListener('click', () => addCategorie());
  newDiv.appendChild(but1);
  

  const but2 = document.createElement("button");
  but2.innerHTML = "Project <i class='far fa-minus-square'></i>";
  but2.style.fontSize = "15px";
  but2.style.float = "right";
  but2.style.margin = "3px 10px auto";
  but2.style.padding = "10px";
  but2.addEventListener('click', () => delCategorie());
  newDiv.appendChild(but2);

}

function createNavigation(){
  const content = document.getElementById('container');
  const newDiv1 = document.createElement("div");
  newDiv1.id = "navCategories";
  newDiv1.style.width = "80%";
  newDiv1.style.height= "50px";
  //newDiv1.style.background = "black";
  newDiv1.style.margin = "20px auto";
  //newDiv1.style.color = "white";
  content.appendChild(newDiv1);
}

function renderLocalCategories(){
  const navCategories = document.getElementById("navCategories");
   categories = getMyCategories()
  //console.log("categories :"+categories)

  categories.forEach(function(val){
    const item = document.createElement("button");
    item.id = val;
    item.innerHTML = val;
    item.style.float = "left";
    item.style.fontSize = "15px";
    item.style.float = "left";
    item.style.margin = "3px auto";
    item.style.padding = "10px";
    item.style.borderRadius = "15px";
    item.addEventListener('click', () => renderProjects(val));
    navCategories.appendChild(item);
  });
  //console.log(categories)
  if (categories.length > 0){
    const bt = document.getElementById(categories[0]);
    bt.style.background = "red";}

}
function createBodyItem(){
  const content = document.getElementById('container');
  const newDiv2 = document.createElement("div");
  newDiv2.id = "body-item";
  newDiv2.style.width = "80%";
  newDiv2.style.height= "auto";
  //newDiv2.style.background = "black";
  newDiv2.style.margin = "-26px auto";
  newDiv2.style.color = "gray";
  newDiv2.style.border = "1px solid #900";
  newDiv2.style.borderRadius = "15px";
  content.appendChild(newDiv2);
}
function renderProjectFirstCat(){
  //categories = getMyCategories()
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
      prj.marginTop = "-20px";
      //prj.style.background = "red"
      prj.style.float = "right";
      prj.style.fontSize = "15px";
      prj.style.float = "right";
      prj.style.margin = "3px 10px auto";
      prj.style.padding = "10px";

      projectCat.appendChild(prj);
      /*let catName = categories[0];*/
      prj.addEventListener('click', () => createProjects());
    }
   } 
}
export default initPage