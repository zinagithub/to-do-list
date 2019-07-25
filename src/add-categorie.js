import createCategorie from './create-cat.js';
//var createCategorie = require('./create-cat.js');
const addCategorie = function(){

	const content = document.getElementById('container');
	if (document.getElementById("winCategorie")== null){
		const inputDiv = document.createElement("div");
		inputDiv.id = "winCategorie";
		inputDiv.style.width = "350px";
		inputDiv.style.height = "200px";
		inputDiv.style.background = "orange";
		inputDiv.style.position = "fixed";
		inputDiv.style.top = "20px";
		inputDiv.style.left = "40%";
		inputDiv.style.display = "block";
		content.appendChild(inputDiv);

		const catInput = document.createElement("input");
		catInput.setAttribute("type", "text");
		catInput.setAttribute("placeholder", "Enter the categorie name");
		catInput.setAttribute("id", "catName");
		catInput.setAttribute("required", true);
		inputDiv.appendChild(catInput);

		const but = document.createElement("button");
		but.id = "saveCat";
		but.innerHTML = "save";
		inputDiv.appendChild(but);
		but.addEventListener('click', () => createCategorie());
	}else {
		const inputDiv = document.getElementById("winCategorie");
		const but = document.getElementById("saveCat");
		inputDiv.style.display = "block";
		but.addEventListener('click', () => createCategorie());
	}
	
	

}
export default addCategorie