const Project = (title, description, dueDate ,priority) => {
  
  const title = () => title;
  const getDescription  = () => description;
  const dueDate = () => dueDate;
  const priority = () => priority;

  
  return {title, description, dueDate ,priority}
};
let allProject = [];