import createToDo from './create-todo';
import { setCategories, getMyCategories } from './local-storage';
import { renderProjects, changeCatColor } from './render-prj';


const createCategory = () => {
  const winCat = document.getElementById('winCategory');
  const catName = document.getElementById('catName').value;

  winCat.style.display = 'none';
  const navCategories = document.getElementById('navCategories');

  if (document.getElementById(catName) == null) {
    const item = document.createElement('button');

    item.id = catName;
    item.innerHTML = catName;
    item.classList.add('catButton');
    navCategories.appendChild(item);
    const categories = getMyCategories();
    categories.push(catName);
    setCategories(categories);
    changeCatColor(catName);
    renderProjects(catName);
    if (document.getElementById('addPrj') == null) {
      const projectCat = document.getElementById('header');
      const prj = document.createElement('button');
      prj.id = 'addPrj';
      prj.innerHTML = "To Do<i class='far fa-plus-square'></i>";
      projectCat.appendChild(prj);
      prj.addEventListener('click', createToDo);
    } else {
      const prj = document.getElementById('addPrj');
      prj.addEventListener('click', createToDo);
    }
    item.addEventListener('click', () => renderProjects(catName));
  }
};

export default createCategory;
