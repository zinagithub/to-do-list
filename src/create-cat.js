import createToDo from './create-todo.js';
import {setCategories , getMyCategories} from './local-storage';
import {renderProjects, changeCatColor} from './render-prj';


const createCategorie = function (){
	
	const winCat = document.getElementById("winCategorie");
	const container = document.getElementById("container");
	const saveBut = document.getElementById("saveCat");
	const catName = document.getElementById("catName").value;
	console.log("catName "+catName)
	winCat.style.display = "none";
	//saveBut.removeEventListener('click', () => createCategorie())
	const navCategories = document.getElementById("navCategories");
	
	if (document.getElementById(catName)==null){
		const item = document.createElement("button");
		item.id = catName;
		item.innerHTML = catName;
		item.classList.add("catButton")
		navCategories.appendChild(item);
		var categories = getMyCategories();
		categories.push(catName);
		setCategories(categories);
		changeCatColor(catName)
		renderProjects(catName)
		if (document.getElementById("addPrj")== null){
			const projectCat = document.getElementById("header");
      		const prj = document.createElement("button");
	        prj.id = "addPrj";
	        prj.innerHTML = "To Do<i class='far fa-plus-square'></i>";
	        projectCat.appendChild(prj);
	        prj.addEventListener('click', () => createToDo());
		}else{
			const prj = document.getElementById("addPrj");
			prj.addEventListener('click', () => createProjects());
		}
		item.addEventListener('click', () => renderProjects(catName));
	
	}
	
}

export default createCategorie;