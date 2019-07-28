import createCategorie from './create-cat.js';
//var createCategorie = require('./create-cat.js');
const addCategorie = function(){

	const content = document.getElementById('container');
	if (document.getElementById("winCategorie")== null){
		const inputDiv = document.createElement("div");
		inputDiv.id = "winCategorie";
		inputDiv.style.display = "block";
		content.appendChild(inputDiv);

		const titleBox = document.createElement("p");
		titleBox.innerHTML = "Add Project"
		inputDiv.appendChild(titleBox)


		const catInput = document.createElement("input");
		catInput.style.display = "block"
		catInput.style.margin = "0 auto 5px auto"
		catInput.setAttribute("size", "30");
		catInput.setAttribute("type", "text");
		catInput.setAttribute("placeholder", "Enter the categorie name");
		catInput.setAttribute("id", "catName");
		catInput.setAttribute("required", true);
		inputDiv.appendChild(catInput);

		const butSave = document.createElement("button");
		butSave.id = "saveCat";
		butSave.style.margin = "20px auto 15px 100px"
		butSave.innerHTML = "save";
		inputDiv.appendChild(butSave);
		butSave.addEventListener('click', () => createCategorie());



		const butEsc = document.createElement("button");
		butEsc.id = "escCat";
		butEsc.style.margin = "20px auto 15px 20px"
		butEsc.innerHTML = "Cancel";
		inputDiv.appendChild(butEsc);
		butEsc.addEventListener('click', () => escCat());
	}else {
		const inputDiv = document.getElementById("winCategorie");
		const but = document.getElementById("saveCat");
		inputDiv.style.display = "block";
		but.addEventListener('click', () => createCategorie());
	}
	
	

}
function escCat(){
	const inputDiv = document.getElementById('winCategorie');
	inputDiv.style.display = "none";
}
export default addCategorie