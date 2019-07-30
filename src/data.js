import {getMyCategories , getMyToDoList , setMyToDoList} from './local-storage';
import createToDo from './create-todo.js';
import './style.css';
export default class Project {
  constructor(title, description, dueDate ,priority,categorie) {
    //this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.categorie = categorie
  }

  delToDo(key) {
    
  }
  renderProject(key) {
    const bodyItem = document.getElementById("body-item");
    //console.log(this.priority+"  "+this.title+"  "+this.description)
    if (document.getElementById("table") == null){
      const table = document.createElement("table")
      table.id = "table"
      bodyItem.appendChild(table)
      const row1 = document.createElement('tr')
      table.appendChild(row1)

      const col0 = document.createElement('td');
      col0.innerHTML = "Priority";
      row1.appendChild(col0);

      const col1 = document.createElement('td');
      col1.innerHTML = "Title";
      row1.appendChild(col1);

      const col2 = document.createElement('td')
      col2.innerHTML = "Description"
      row1.appendChild(col2)

      const col3 = document.createElement('td')
      col3.innerHTML = "Due Date"
      row1.appendChild(col3)

      const col4 = document.createElement('td')
      col4.innerHTML = ""
      row1.appendChild(col4)

      const col5 = document.createElement('td')
      col5.innerHTML = ""
      row1.appendChild(col5)

    } else {
      const table = document.getElementById("table")
      
    }
    
    const row2 = document.createElement('tr')
    //row2.id = key.toString()+this.categorie
    table.appendChild(row2)
    const col10 = document.createElement('td')
    col10.innerHTML = this.priority
    row2.appendChild(col10)

    const col11 = document.createElement('td')
    col11.innerHTML = this.title
    row2.appendChild(col11)

    const col22 = document.createElement('td')
    col22.innerHTML = this.description
    row2.appendChild(col22)


    const col33 = document.createElement('td')
    col33.innerHTML = this.dueDate
    row2.appendChild(col33)

    const col44 = document.createElement('td')
    col44.id = key+"update"
    col44.classList.add ("update")
    //col44.addEventListener('click', this.editToDo());
    col44.innerHTML = "<i class='fas fa-edit'></i>"
    row2.appendChild(col44)

    const col55 = document.createElement('td')
    col55.id = key+"cut"
    col55.classList.add("cut")
    col55.innerHTML = '<i class="fas fa-cut"></i>' 
    row2.appendChild(col55)
  }

  editToDo(key) {
    
    if (document.getElementById("editDiv") === null) {
      const content = document.getElementById('container');
      const editDiv = document.createElement("div");
      editDiv.id = "editDiv";
      editDiv.style.display = "block";

      const titleBox = document.createElement("p");
      editDiv.appendChild(titleBox)


      content.appendChild(editDiv);
      const titleInput = document.createElement("input");
      titleInput.style.display = "block"
      titleInput.style.margin = "0 auto 5px auto"
      titleInput.setAttribute("type", "text");
      titleInput.setAttribute("size", "30");
      titleInput.setAttribute("value", this.title);
      titleInput.setAttribute("id", "title");
      titleInput.setAttribute("required", true);

      editDiv.appendChild(titleInput);
      const descripInput = document.createElement("input");
      descripInput.style.display = "block"
      descripInput.style.margin = "0 auto 5px auto"
      descripInput.setAttribute("size", "30");
      descripInput.setAttribute("type", "text");
      descripInput.setAttribute("value", this.description);
      descripInput.setAttribute("id", "description");
      editDiv.appendChild(descripInput);
      
      const priority = document.createElement("select");
      priority.style.margin = "0px auto 5px 33px"
      priority.id = "priority";
      const height = document.createElement("option");
      const medium = document.createElement("option");
      const low = document.createElement("option");
      height.innerHTML = "Height";
      height.setAttribute("value","height");

      medium.innerHTML = "Medium";
      medium.setAttribute("value","medium");

      low.innerHTML = "Low";
      low.setAttribute("value","low");

      editDiv.appendChild(priority);
      priority.appendChild(height);
      priority.appendChild(medium);
      priority.appendChild(low);
      priority.value = this.priority 

      var categories = getMyCategories();
      const catNameinfo = document.createElement("select");
      catNameinfo.id = "catNameinfo";
      catNameinfo.style.margin = "0 auto 5px 5px"
    
      categories.forEach(function(val){
        
        let option  = document.createElement("option");
        option.innerHTML = val;
        option.setAttribute("value",val);
        option.setAttribute("id",val);
        catNameinfo.appendChild(option)
      });

      editDiv.appendChild(catNameinfo)

      const datePrj = document.createElement("input");
      datePrj.style.margin = "0 auto 5px 5px"
      datePrj.setAttribute("type", "date");
      datePrj.setAttribute("value", this.dueDate);
      datePrj.setAttribute("id", "dateDue");
      editDiv.appendChild(datePrj);


      const butSave = document.createElement("button");
      butSave.id = "editPrj";
      butSave.style.margin = "20px auto 15px 100px"
      butSave.innerHTML = "edit";
      editDiv.appendChild(butSave);
      butSave.addEventListener('click',() =>saveEdit(key))

    const butEsc = document.createElement("button");
    butEsc.id = "escPrj";
    butEsc.style.margin = "20px auto 15px 20px"
    butEsc.innerHTML = "Cancel";
    editDiv.appendChild(butEsc);
    butEsc.addEventListener('click',() => escEdit())
  
    }
    else {
      const editDiv = document.getElementById("editDiv")
      editDiv.style.display = "block";
    
      const title = document.getElementById("title")
      title.innerHTML = this.title
      title.value = this.title

      const description = document.getElementById("description")
      description.innerHTML = this.description
      description.value = this.description

      const priority = document.getElementById("priority")
      priority.value = this.priority

      const categorie = document.getElementById("catNameinfo")
      categorie.value = this.categorie

      const dueDate = document.getElementById("dateDue")
      dueDate.value = this.dueDate

      const butSave = document.getElementById("editPrj");
   }
  }
  
}


function escEdit(){
  const editDiv = document.getElementById("editDiv")
  editDiv.style.display = "none"
}

function saveEdit(key){
  const editDiv = document.getElementById("editDiv")
  const title = document.getElementById("title")
  const description = document.getElementById("description")
  const priority = document.getElementById("priority")
  const categorie = document.getElementById("catNameinfo")
  const dueDate = document.getElementById("dateDue")
  let toDoArr = getMyToDoList()
  editDiv.style.display = "none";
  toDoArr[key].title = title.value
  toDoArr[key].description = description.value
  toDoArr[key].dueDate = dueDate.value
  toDoArr[key].priority = priority.value
  toDoArr[key].categorie = categorie.value
  setMyToDoList(toDoArr)
}