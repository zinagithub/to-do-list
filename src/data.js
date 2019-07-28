import {setMyToDoList , getMyToDoList} from './local-storage';
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
    console.log("Hi zina")
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

    }else {
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
      //col44.id = "update"
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
  editToDo() {
    console.log("edit" )
  }
  

}


