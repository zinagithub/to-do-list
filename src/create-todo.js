import './style.css';
import Project from './data.js';
import { renderProjects } from './render-prj';
import { getMyCategories , getMyToDoList , setMyToDoList } from './local-storage';

const createToDo = function () {
	inputToDo();
}

const inputToDo = function () {
	const inputDiv = document.getElementById("inputDiv")
	inputDiv.style.display = "block";
	const catNameinfo = document.getElementById("catNameinfo");
	const butSave = document.getElementById("savePrj");
	const butEsc = document.getElementById("escPrj");

	const categories = getMyCategories();
	catNameinfo.innerHTML = "";
	catNameinfo.style.margin = "0 auto 5px 5px"
	categories.forEach(function(val){
		let option  = document.createElement("option");
		option.innerHTML = val;
		option.setAttribute("value",val);
		option.setAttribute("id",val);
		catNameinfo.appendChild(option)
	});
	butSave.addEventListener('click', () => savePrj(),false);
	butEsc.addEventListener('click', () => escPrj());
		
}

const escPrj = function(){
	const inputDiv = document.getElementById("inputDiv");
	// removeEventListener('click', () => escPrj());
	inputDiv.style.display = "none";
	//return false
}

const savePrj = function(event){
	const inputDiv = document.getElementById("inputDiv");
	if (inputDiv.style.display == "block"){
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;
		const dateDue = document.getElementById("dateDue").value;
		const priority = document.getElementById("priority").value;
		const catName =  document.getElementById("catNameinfo").value;
		inputDiv.style.display = "none";
		const butSave = document.getElementById("savePrj");

		const prj = new Project(title, description, dateDue ,priority,catName);
		let myToDoList = getMyToDoList();
		let categories = getMyCategories();
		console.log("myToDoList before:"+myToDoList)
		myToDoList.push(prj);
		console.log("myToDoList after:"+myToDoList)
		setMyToDoList (myToDoList);
		renderProjects(catName)
		//console.log(prj);
	}
	
  // return true
}
export default createToDo;