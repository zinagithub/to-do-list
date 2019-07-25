/* 1 - import data from data.js 
   2 - filter and display all project with catname categorie 
   3 - add new and delete project buttons if they don't exist
   4 - listen the button */



   //ajouter le input de selection de la categorie du projet
import Project from './data.js';
import {getMyCategories , getMyToDoList , setMyToDoList} from './local-storage';
const createProjects = function (){
	inputToDo()
	
}
function inputToDo() {
		const content = document.getElementById('container');
		if (document.getElementById("inputDiv") == null){
			const inputDiv = document.createElement("div");
		inputDiv.id = "inputDiv";
		inputDiv.style.width = "550px";
		inputDiv.style.height = "350px";
		inputDiv.style.background = "orange";
		inputDiv.style.position = "fixed";
		inputDiv.style.top = "20px";
		inputDiv.style.left = "40%";
		inputDiv.style.display = "block";
		content.appendChild(inputDiv);

		const titleInput = document.createElement("input");
		titleInput.setAttribute("type", "text");
		titleInput.setAttribute("placeholder", "Enter the title");
		titleInput.setAttribute("id", "title");
		titleInput.setAttribute("required", true);
		inputDiv.appendChild(titleInput);

		const descripInput = document.createElement("input");
		descripInput.setAttribute("type", "text");
		descripInput.setAttribute("placeholder", "Description");
		descripInput.setAttribute("id", "description");
		//titleInput.setAttribute("required", true);
		inputDiv.appendChild(descripInput);

		const datePrj = document.createElement("input");
		datePrj.setAttribute("type", "date");
		datePrj.setAttribute("placeholder", "Date due");
		//datePrj.setAttribute("value", "");
		datePrj.setAttribute("id", "dateDue");
		//titleInput.setAttribute("required", true);
		inputDiv.appendChild(datePrj);


		const priority = document.createElement("select");
		priority.id = "priority";
		const height = document.createElement("option");
		const medium = document.createElement("option");
		const low = document.createElement("option");
		height.innerHTML = "Height";
		height.setAttribute("value","height");

		medium.innerHTML = "Medium";
		medium.setAttribute("value","medium");

		low.innerHTML = "Low";
		low.setAttribute("value","low");

		inputDiv.appendChild(priority);
		priority.appendChild(height);
		priority.appendChild(medium);
		priority.appendChild(low);


		let categories = getMyCategories();
		console.log(categories);
		const catNameinfo = document.createElement("select");
		catNameinfo.id = "catNameinfo";
		categories.forEach(function(val){
			
			let option  = document.createElement("option");
			option.innerHTML = val;
			option.setAttribute("value",val);
			option.setAttribute("id",val);
			catNameinfo.appendChild(option)
		});

		inputDiv.appendChild(catNameinfo)


		const butSave = document.createElement("button");
		butSave.id = "savePrj";
		butSave.innerHTML = "save";
		inputDiv.appendChild(butSave);
		butSave.addEventListener('click', () => savePrj());


		const butEsc = document.createElement("button");
		butEsc.id = "escPrj";
		butEsc.innerHTML = "Cancel";
		inputDiv.appendChild(butEsc);
		butEsc.addEventListener('click', () => escPrj());
	

		}
		else {
			inputDiv = document.getElementById("inputDiv")
			inputDiv.style.display = "block";
			const butSave = document.getElementById("savePrj");
			const butEsc = document.getElementById("escPrj");
			butSave.addEventListener('click', () => savePrj());
			butEsc.addEventListener('click', () => escPrj());
		}
		
}

function escPrj(){
	const inputDiv = document.getElementById("inputDiv");
	removeEventListener('click', () => escPrj());
	inputDiv.style.display = "none";
}

function savePrj(){
	const inputDiv = document.getElementById("inputDiv");
	const title = document.getElementById("title").value;
	const description = document.getElementById("description").value;
	const dateDue = document.getElementById("dateDue").value;
	const priority = document.getElementById("priority").value;
	const catName =  document.getElementById("catNameinfo").value;
	inputDiv.style.display = "none";
	//removeEventListener('click', () => savePrj());

	const prj = new Project(title, description, dateDue ,priority,catName);
	let myToDoList = getMyToDoList();
	myToDoList.push(prj);
	setMyToDoList (myToDoList);
	console.log(prj);
}
export default createProjects;