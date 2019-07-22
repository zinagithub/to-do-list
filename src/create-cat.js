const createCategorie = function (){
	//module.exports = function (){
	const winCat = document.getElementById("winCategorie");
	const container = document.getElementById("container");
	const saveBut = document.getElementById("saveCat");
	const catName = document.getElementById("catName").value;
	//alert(catName);
	winCat.style.display = "none";
	saveBut.removeEventListener('click', () => createCategorie())
	if (document.getElementById(catName)==null){
		const item = document.createElement("button");
		item.id = catName;
		item.innerHTML = catName;
		item.style.float = "left";
	//item.style.paddingRight = "20px";
		container.appendChild(item);
	}
	
}
export default createCategorie;