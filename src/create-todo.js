import './style.css';
import Project from './data.js';
import { renderProjects } from './render-prj';
import { getMyCategories , getMyToDoList , setMyToDoList } from './local-storage';



const createToDo = function () {
	inputToDo();
}

const inputToDo = function () {
	const inputDiv = document.getElementById("inputDiv")
	inputDiv.style.display = "flex";
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
		catNameinfo.appendChild(option)
	});
	butSave.addEventListener('click', () => savePrj());
	butEsc.addEventListener('click', () => escPrj());
		
}

const escPrj = function(){
	const inputDiv = document.getElementById("inputDiv");
	inputDiv.style.display = "none";

}

const savePrj = function(){
	const inputDiv = document.getElementById("inputDiv");
	if (inputDiv.style.display == "flex"){
	const title = document.getElementById("title").value;
	const description = document.getElementById("description").value;
	const dateDue = document.getElementById("dateDue").value;
	const priority = document.getElementById("priority").value;
	const catName =  document.getElementById("catNameinfo").value;
	inputDiv.style.display = "none";
	saveToDoData(title, description, dateDue ,priority,catName)
	renderProjects(catName)
	}
}	
function saveToDoData (title, description, dateDue ,priority,catName){
	const prj = new Project(title, description, dateDue ,priority,catName);
	let myToDoList = getMyToDoList();
	myToDoList.push(prj);
	setMyToDoList (myToDoList);
}

export default createToDo;