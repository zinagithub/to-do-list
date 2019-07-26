import {setMyToDoList , getMyToDoList,getMyCategories} from './local-storage';
import Project from './data.js'
export default function renderProjects(catName){
	
    var categories = getMyCategories()
	categories.forEach(function(val){
		let elm = document.getElementById(val);
		elm.style.background = "white";
	});
	if (categories.length > 0){
		const bt = document.getElementById(catName);
    	bt.style.background = "red";	
    	}
    let allToDo = getMyToDoList();
    //afficher les todo de la categorie specifiée
    const bodyItem = document.getElementById("body-item");
    bodyItem.innerHTML= "";
    allToDo.forEach(function(val){
    	if (val.categorie == catName){
    		//console.log("zina : "+val.categorie + " "+ val.title)
    	   val.renderProject()
    	}
    });

}