import {setMyToDoList , getMyToDoList,getMyCategories} from './local-storage';
import Project from './data.js'

export  const renderProjects = (catName) => {
	console.log(catName)
    changeCatColor(catName)   
    var allToDo = getMyToDoList();
    //afficher les todo de la categorie specifiée
    renderTabToDo(catName)
    var delRowToDo = document.getElementsByClassName("cut");
    for (var i =0;i<delRowToDo.length;i++){
         let elmToCut = delRowToDo[i].id.toString().replace("cut","")
         delRowToDo[i].addEventListener('click', function() 
         {
           const tdToDel = document.getElementById(elmToCut+"cut") 
           tdToDel.parentNode.innerHTML = "";
           //tdToDel.parentNode.removeChild(parentNode)
           allToDo.splice(elmToCut,1)
           setMyToDoList(allToDo)

           //renderTabToDo(catName)
        })
    }

}
export const  changeCatColor =(catName)=>{
    var categories = getMyCategories()
    categories.forEach(function(val){
        let elm = document.getElementById(val);
        elm.style.background = "white";
    });
    if (categories.length > 0){
        const bt = document.getElementById(catName);
        bt.style.background = "red";
    }
}

const delFunction = (elmToCut) =>{
    //console.log(catName)
    var allToDo = getMyToDoList();
    allToDo.splice(elmToCut,1)
    setMyToDoList(allToDo)
    renderTabToDo(this.categorie)
}

function renderTabToDo(catName){
  const bodyItem = document.getElementById("body-item");
  var allToDo = getMyToDoList();
    bodyItem.innerHTML= "";

    allToDo.forEach(function(val,index){
        //console.log("catName : "+catName+" todo : "+val)
        if (val.categorie == catName){
           val.renderProject(index)
        }
    });
}