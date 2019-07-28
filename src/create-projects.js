import Project from './data.js';
import {renderProjects} from './render-prj';
import {getMyCategories , getMyToDoList , setMyToDoList} from './local-storage';
const createProjects = function (){
	inputToDo()
	
}

const inputToDo = function (){
		
		if (document.getElementById("inputDiv") == null){
			boxInputToDo()			

		}
		else {
			inputDiv = document.getElementById("inputDiv")
			inputDiv.style.display = "block";
			const catNameinfo = document.getElementById("catNameinfo");
			const butSave = document.getElementById("savePrj");
			const butEsc = document.getElementById("escPrj");


			var categories = getMyCategories();
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
		
}
function boxInputToDo(){
	const content = document.getElementById('container');
	const inputDiv = document.createElement("div");
	inputDiv.id = "inputDiv";
	inputDiv.style.width = "400px";
	inputDiv.style.height = "300px";
	inputDiv.style.background = "orange";
	inputDiv.style.position = "fixed";
	inputDiv.style.top = "70px";
	inputDiv.style.left = "30%";
	inputDiv.style.borderRadius = "15px";
	inputDiv.style.display = "block";

	const titleBox = document.createElement("p");
	titleBox.style.fontSize = "30px";
	titleBox.style.color = "white"
	titleBox.style.padding = "10px"
	titleBox.style.textAlign = "center"
	titleBox.innerHTML = "Add To Do"
	inputDiv.appendChild(titleBox)


	content.appendChild(inputDiv);
	const titleInput = document.createElement("input");
	titleInput.style.display = "block"
	titleInput.style.margin = "0 auto 5px auto"
	titleInput.setAttribute("type", "text");
	titleInput.setAttribute("size", "30");
	titleInput.setAttribute("placeholder", "Enter the title");
	titleInput.setAttribute("id", "title");
	titleInput.setAttribute("required", true);

	inputDiv.appendChild(titleInput);
	const descripInput = document.createElement("input");
	descripInput.style.display = "block"
	descripInput.style.margin = "0 auto 5px auto"
	descripInput.setAttribute("size", "30");
	descripInput.setAttribute("type", "text");
	descripInput.setAttribute("placeholder", "Description");
	descripInput.setAttribute("id", "description");
	inputDiv.appendChild(descripInput);

	


	const priority = document.createElement("select");
	priority.style.margin = "0px auto 5px 33px"
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


		var categories = getMyCategories();
		console.log(categories);
		const catNameinfo = document.createElement("select");
		catNameinfo.id = "catNameinfo";
		catNameinfo.style.margin = "0 auto 5px 5px"
		//catNameinfo.style.display = "block"
		categories.forEach(function(val){
			
			let option  = document.createElement("option");
			option.innerHTML = val;
			option.setAttribute("value",val);
			option.setAttribute("id",val);
			catNameinfo.appendChild(option)
		});

		inputDiv.appendChild(catNameinfo)

		const datePrj = document.createElement("input");
	//datePrj.style.display = "block"
	datePrj.style.margin = "0 auto 5px 5px"
	datePrj.setAttribute("type", "date");
	datePrj.setAttribute("placeholder", "Date due");
	datePrj.setAttribute("id", "dateDue");
	inputDiv.appendChild(datePrj);


		const butSave = document.createElement("button");
		butSave.id = "savePrj";
		butSave.style.margin = "20px auto 15px 100px"
		butSave.innerHTML = "save";
		inputDiv.appendChild(butSave);
		butSave.addEventListener('click', () => savePrj(),false);


		const butEsc = document.createElement("button");
		butEsc.id = "escPrj";
		butEsc.style.margin = "20px auto 15px 20px"
		butEsc.innerHTML = "Cancel";
		inputDiv.appendChild(butEsc);
		butEsc.addEventListener('click', () => escPrj());
	 
}

const escPrj = function(){
	const inputDiv = document.getElementById("inputDiv");
	removeEventListener('click', () => escPrj());
	inputDiv.style.display = "none";
	return false
}

const savePrj = function(){
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
	
   return true
}
export default createProjects;