import addCategorie from './add-categorie.js';
import delCategorie from './del-categorie.js';
import {getMyCategories} from './local-storage';
import createProjects from './create-projects.js';
import renderProjects from './render-prj.js';
//import categories  from './data.js';
let categories = [];

var initPage = function (){
  
  createHeader()
  createNavigation()
  renderLocalCategories()
  createBodyItem()
  createAddPrjButton()
  renderProjectFirstCat()
  //si il existe des  projets de la premiere categorie  alors afficher les
}

function createHeader(){
  const content = document.getElementById('container');
  const newDiv = document.createElement("div");
  newDiv.id = "header";
  newDiv.style.width = "80%";
  newDiv.style.height= "50px";
  newDiv.style.background = "black";
  newDiv.style.margin = "0 auto";
  newDiv.style.color = "white";
  content.appendChild(newDiv);
  const elem = document.createElement("p");
  elem.innerHTML = "My To-Do-List";
  elem.style.textAlign = "left";
  elem.style.marginTop = "5px";
  elem.style.fontSize = "35px";
  elem.style.display = "inline-block";
  newDiv.appendChild(elem);

  const but1 = document.createElement("button");
  but1.innerHTML = "add categorie";
  but1.style.float = "right";
  but1.style.marginTop = "15px";
  but1.addEventListener('click', () => addCategorie());
  newDiv.appendChild(but1);
  

  const but2 = document.createElement("button");
  but2.innerHTML = "delete categorie";
  but2.style.float = "right";
  but2.style.marginTop = "15px";
  but2.addEventListener('click', () => delCategorie());
  newDiv.appendChild(but2);

}

function createNavigation(){
  const content = document.getElementById('container');
  const newDiv1 = document.createElement("div");
  newDiv1.id = "navCategories";
  newDiv1.style.width = "80%";
  newDiv1.style.height= "50px";
  newDiv1.style.background = "black";
  newDiv1.style.margin = "20px auto";
  newDiv1.style.color = "white";
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
    item.addEventListener('click', () => renderProjects(val,categories));
    navCategories.appendChild(item);
  });
  const bt = document.getElementById(categories[0]);
  bt.style.background = "red";
}
function createBodyItem(){
  const content = document.getElementById('container');
  const newDiv2 = document.createElement("div");
  newDiv2.id = "body-item";
  newDiv2.style.width = "80%";
  newDiv2.style.height= "300px";
  newDiv2.style.background = "black";
  newDiv2.style.margin = "0 auto";
  newDiv2.style.color = "white";
  content.appendChild(newDiv2);
}
function renderProjectFirstCat(){
  categories = getMyCategories()
  let catName  = categories[0]
  renderProjects(catName, categories);
}

function createAddPrjButton(){
  if (document.getElementById("addPrj")== null){
      const projectCat = document.getElementById("body-item");
      const prj = document.createElement("button");
      prj.id = "addPrj";
      prj.innerHTML = "Add project";
      prj.style.float = "right";
      projectCat.appendChild(prj);
      /*let catName = categories[0];*/
      prj.addEventListener('click', () => createProjects());
    }else{
      //let catName = categories[0];
      const prj = document.getElementById("addPrj");
      prj.addEventListener('click', () => createProjects());
    }
}
export default initPage