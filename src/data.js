/*const Project = (title, description, dueDate ,priority) => {
  
  const title = () => title;
  const getDescription  = () => description;
  const dueDate = () => dueDate;
  const priority = () => priority;

  
  return {title, description, dueDate ,priority}
};*/
export default class Project {
  constructor(id,title, description, dueDate ,priority,categorie) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.categorie = categorie
  }

  deleteProject() {
    
  }
  renderProject() {

  }
  updateProject() {

  }
  

}
