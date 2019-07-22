import addCategorie from './add-categorie.js';
import delCategorie from './del-categorie.js';

var initPage = function (id){
  const content = document.getElementById('container');
  const newDiv = document.createElement("div");
  newDiv.id = id;
  newDiv.style.width = "80%";
  newDiv.style.height= "200px";
  newDiv.style.background = "blue";
  newDiv.style.margin = "0 auto"
  content.appendChild(newDiv);
  const elem = document.createElement("p");
  elem.innerHTML = "My To-Do-List";
  elem.style.textAlign = "center";
  elem.style.paddingTop = "60px";
  elem.style.fontSize = "35px";
  newDiv.appendChild(elem);

  const but1 = document.createElement("button");
  but1.innerHTML = "add categorie";
  but1.addEventListener('click', () => addCategorie());
  newDiv.appendChild(but1);
  

  const but2 = document.createElement("button");
  but2.innerHTML = "delete categorie";
  but2.addEventListener('click', () => delCategorie());
  newDiv.appendChild(but2);
  
}
export default initPage