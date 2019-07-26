import createProjects from './create-projects.js';
import {setCategories , getMyCategories} from './local-storage';
import renderProjects from './render-prj.js';
//import * as catObj  from './data.js';

const createCategorie = function (){
	//module.exports = function (){
	const winCat = document.getElementById("winCategorie");
	const container = document.getElementById("container");
	const saveBut = document.getElementById("saveCat");
	const catName = document.getElementById("catName").value;
	winCat.style.display = "none";
	saveBut.removeEventListener('click', () => createCategorie())
	const navCategories = document.getElementById("navCategories");
	
	if (document.getElementById(catName)==null){
		const item = document.createElement("button");
		item.id = catName;
		item.innerHTML = catName;
		item.style.float = "left";
  		item.style.fontSize = "15px";
  		item.style.margin = "3px auto";
  		item.style.padding = "10px";
        item.style.borderRadius = "15px";
		navCategories.appendChild(item);
		var categories = getMyCategories();
		categories.push(catName);
		//console.log("zina : "+categories);
		setCategories(categories);
		if (document.getElementById("addPrj")== null){
			const projectCat = document.getElementById("header");
      		const prj = document.createElement("button");
	        prj.id = "addPrj";
	        prj.innerHTML = "To Do<i class='far fa-plus-square'></i>";
	        prj.marginTop = "-20px";
	        prj.style.float = "right";
	        prj.style.fontSize = "15px";
	        prj.style.float = "right";
	        prj.style.margin = "3px 10px auto";
	        prj.style.padding = "10px";
	        projectCat.appendChild(prj);
	        prj.addEventListener('click', () => createProjects());
		}else{
			const prj = document.getElementById("addPrj");
			prj.addEventListener('click', () => createProjects());
		}
		item.addEventListener('click', () => renderProjects(catName));
	
	}
	
}

export default createCategorie;