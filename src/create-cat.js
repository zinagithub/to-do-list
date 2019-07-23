import createProjects from './create-projects.js';
const createCategorie = function (categories){
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
		navCategories.appendChild(item);
		categories.push(catName);
		if (document.getElementById("addPrj")== null){
			const projectCat = document.getElementById("body-item");
			const prj = document.createElement("button");
			prj.id = "addPrj";
			prj.innerHTML = "Add project";
			prj.style.float = "right";
			projectCat.appendChild(prj);
			prj.addEventListener('click', () => createProjects(catName));
		}else{
			const prj = document.getElementById("addPrj");
			prj.addEventListener('click', () => createProjects(catName));
		}
		item.addEventListener('click', () => renderProjects(catName));
	
	}
	
}
export default createCategorie;