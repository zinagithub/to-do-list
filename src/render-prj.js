import {setMyToDoList , getMyToDoList} from './local-storage';
import Project from './data.js'
export default function renderProjects(catName, catArray){
	console.log(catName);
	catArray.forEach(function(val){
		let elm = document.getElementById(val);
		elm.style.background = "white";
	});
	const bt = document.getElementById(catName);
    bt.style.background = "red";	

    let allToDo = getMyToDoList();
    //afficher les todo de la categorie specifiée
    const bodyItem = document.getElementById("body-item");
    bodyItem.style.background = "green";
    allToDo.forEach(function(val){
    	if (val.categorie == catName)
    	  val.renderProject()
    });

}