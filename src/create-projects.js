/* 1 - import data from data.js 
   2 - filter and display all project with catname categorie 
   3 - add new and delete project buttons if they don't exist
   4 - listen the button */
import Project from './data.js'
const createProjects = function (catName){
	inputToDo()
	
}
function inputToDo() {
		const content = document.getElementById('container');
		const inputDiv = document.createElement("div");
		//inputDiv.id = "";
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
		datePrj.setAttribute("id", "dateDue");
		//titleInput.setAttribute("required", true);
		inputDiv.appendChild(datePrj);

		const but = document.createElement("button");
		but.id = "savePrj";
		but.innerHTML = "save";
		inputDiv.appendChild(but);
		but.addEventListener('click', () => savePrj(categories));
	

}
export default createProjects;