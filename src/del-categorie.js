import {getMyCategories , setCategories, getMyToDoList , setMyToDoList} from './local-storage';
import {renderProjects } from './render-prj';

const delCategorie = function(){
	const content = document.getElementById('container');
	/*if (document.getElementById("winDelCat")== null){
		const inputDiv = document.createElement("div");
		inputDiv.id = "winDelCat";
		inputDiv.classList.add("project-form")
		inputDiv.style.display = "block";
		content.appendChild(inputDiv);


		var categories = getMyCategories();
		const catNameinfo = document.createElement("select");
		catNameinfo.id = "PrjToDel";
		catNameinfo.style.margin = "0 auto 5px 5px"
		categories.forEach(function(val){
			
			let option  = document.createElement("option");
			option.innerHTML = val;
			option.setAttribute("value",val);
			catNameinfo.appendChild(option)
		});

		inputDiv.appendChild(catNameinfo)

		
		const butConfirm = document.createElement("button");
		butConfirm.id = "deleteCat";
		butConfirm.style.margin = "20px auto 15px 20px"
		butConfirm.innerHTML = "Delete";
		inputDiv.appendChild(butConfirm);
		butConfirm.addEventListener('click', () => confDelCat());



		const butEsc = document.createElement("button");
		butEsc.id = "escDelCat";
		butEsc.style.margin = "20px auto 15px 20px"
		butEsc.innerHTML = "Cancel";
		inputDiv.appendChild(butEsc);
		butEsc.addEventListener('click', () => escDelCat());
	}else {*/
		const inputDiv = document.getElementById("winDelCat");
		const butDel = document.getElementById("deleteCat");
		const butEsc = document.getElementById("escDelCat");
		inputDiv.style.display = "block";

		var categories = getMyCategories();
		const catNameinfo = document.getElementById("PrjToDel");
		catNameinfo.innerHTML = ""
		categories.forEach(function(val){
			
			let option  = document.createElement("option");
			option.innerHTML = val;
			option.setAttribute("value",val);
			catNameinfo.appendChild(option)
		});
		butDel.addEventListener('click', () => confDelCat());
		butEsc.addEventListener('click', () => escDelCat());
	//}
	
	

}

const confDelCat = function()
{
	const navCategories = document.getElementById("navCategories");
	const catNameinfo = document.getElementById("PrjToDel").value;
	const child = document.getElementById(catNameinfo)
	if (confirm("Are you sure to Remove "+catNameinfo)){
		let categories = getMyCategories()
		let elmToDel = navCategories.removeChild(child);
		categories.splice(categories.indexOf(catNameinfo),1)
		setCategories(categories)
		let allToDo = getMyToDoList()
  		console.log(allToDo)
        //delete all to do associted to the project
  		for(var i = allToDo.length - 1; i >= 0; i--) {
    			if(allToDo[i].categorie == catNameinfo) {
       				allToDo.splice(i, 1);
    			}
		}
  		setMyToDoList(allToDo)
		escDelCat()
		if (categories.length > 0){
  		let catName  = categories[0]
  		renderProjects(catName);
  		}
  		else{
  			const bodyItem = document.getElementById("body-item");
  			bodyItem.innerHTML = ""
  		}
	}
}

function escDelCat(){
	const inputDiv = document.getElementById("winDelCat");
	inputDiv.style.display = "none";
}
export default delCategorie