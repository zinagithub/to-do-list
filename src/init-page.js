import addCategorie from './add-categorie.js';
import delCategorie from './del-categorie.js';

var initPage = function (categories){
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
  but1.addEventListener('click', () => addCategorie(categories));
  newDiv.appendChild(but1);
  

  const but2 = document.createElement("button");
  but2.innerHTML = "delete categorie";
  but2.style.float = "right";
  but2.style.marginTop = "15px";
  but2.addEventListener('click', () => delCategorie());
  newDiv.appendChild(but2);

  const newDiv1 = document.createElement("div");
  //newDiv1.innerHTML = "Empty Categories..."
  newDiv1.id = "navCategories";
  newDiv1.style.width = "80%";
  newDiv1.style.height= "50px";
  newDiv1.style.background = "black";
  newDiv1.style.margin = "20px auto";
  newDiv1.style.color = "white";
  content.appendChild(newDiv1);

  const newDiv2 = document.createElement("div");
  //newDiv2.innerHTML = "Empty Projects..."
  newDiv2.id = "body-item";
  newDiv2.style.width = "80%";
  newDiv2.style.height= "300px";
  newDiv2.style.background = "black";
  newDiv2.style.margin = "0 auto";
  newDiv2.style.color = "white";
  content.appendChild(newDiv2);

  
}
export default initPage