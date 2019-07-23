import renderItemProjects from './render-item-projects.js';
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
		//console.log(categories);
		item.addEventListener('click', () => renderItemProjects(catName));
	
	}
	
}
export default createCategorie;