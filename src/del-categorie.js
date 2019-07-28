import {getMyCategories , setCategories, getMyToDoList , setMyToDoList} from './local-storage';
import {renderProjects } from './render-prj';

const delCategorie = function(){
	const content = document.getElementById('container');
	if (document.getElementById("winDelCat")== null){
		const inputDiv = document.createElement("div");
		inputDiv.id = "winDelCat";
		inputDiv.style.display = "block";
		content.appendChild(inputDiv);


		var categories = getMyCategories();
		//console.log(categories);
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
	}else {
		const inputDiv = document.getElementById("winDelCat");
		const but1 = document.getElementById("deleteCat");
		const but2 = document.getElementById("escDelCat");
		inputDiv.style.display = "block";

		var categories = getMyCategories();
		//console.log(categories);
		const catNameinfo = document.getElementById("catNameinfo");
		catNameinfo.innerHTML = ""
		//catNameinfo.id = "catNameinfo";
		//catNameinfo.style.margin = "0 auto 5px 5px"
		//catNameinfo.style.display = "block"
		categories.forEach(function(val){
			
			let option  = document.createElement("option");
			option.innerHTML = val;
			option.setAttribute("value",val);
			option.setAttribute("id",val);
			catNameinfo.appendChild(option)
		});
		but1.addEventListener('click', () => confDelCat());
		but2.addEventListener('click', () => escDelCat());
	}
	
	

}

const confDelCat = function()
{
	const navCategories = document.getElementById("navCategories");
	const catNameinfo = document.getElementById("catNameinfo").value;
	const child = document.getElementById(catNameinfo)
	if (confirm("Are you sure to Remove "+catNameinfo)){
		let categories = getMyCategories()
		let elmToDel = navCategories.removeChild(child);
		alert(categories.indexOf(catNameinfo))
		categories.splice(categories.indexOf(catNameinfo),1)
		
		setCategories(categories)
		escDelCat()
		if (categories.length > 0){
  		let catName  = categories[0]
  		renderProjects(catName);
  		let allToDo = getMyToDoList()
  		for (var i = 0;i < allToDo.length;i++){
  			if (allToDo[i].categorie == catNameinfo){
  				alert("i found it")
  			}
  		}

  		}
	}
}

function escDelCat(){
	const inputDiv = document.getElementById("winDelCat");
	inputDiv.style.display = "none";
}
export default delCategorie