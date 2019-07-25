


export default class Project {
  constructor(title, description, dueDate ,priority,categorie) {
    //this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.categorie = categorie
  }

  deleteProject() {
    
  }
  renderProject() {
    //console.log(this.title)
    const bodyItem = document.getElementById("body-item");
    bodyItem.style.background = "green";
    if (document.getElementById("table"+this.categorie) == null){
      const table = document.createElement("table")
      table.id = "table"+this.categorie
      bodyItem.appendChild(table)
      const row1 = document.createElement('tr')
      table.appendChild(row1)

      const col1 = document.createElement('td');
      col1.innerHTML = "Priority";
      row1.appendChild(col1);

      const col2 = document.createElement('td')
      col2.innerHTML = "Description"
      row1.appendChild(col2)

      const col3 = document.createElement('td')
      col3.innerHTML = "Due Date"
      row1.appendChild(col3)
    }else {
      const table = document.getElementById("table"+this.categorie)

    }
    console.log("priority : "+this.priority)
    /*console.log("description : "+this.description)
    console.log(t"date : "+this.dueDate)*/
      const table = document.getElementById("table"+this.categorie)

      const row2 = document.createElement('tr')
      table.appendChild(row2)
      const col11 = document.createElement('td')
      col11.innerHTML = this.priority
      row2.appendChild(col11)
      const col22 = document.createElement('td')
      col22.innerHTML = this.Description
      row2.appendChild(col22)
      const col33 = document.createElement('td')
      col33.innerHTML = this.dueDate
      row2.appendChild(col33)

    
  }
  updateProject() {

  }
  

}
//export var categories = [];
//export {Project , categories}