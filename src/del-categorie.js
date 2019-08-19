import {
  getMyCategories, setCategories, getMyToDoList, setMyToDoList,
} from './local-storage';
import { renderProjects } from './render-prj';

const delCategorie = function () {
  const inputDiv = document.getElementById('winDelCat');
  const butDel = document.getElementById('deleteCat');
  const butEsc = document.getElementById('escDelCat');
  inputDiv.style.display = 'block';

  const categories = getMyCategories();
  const catNameinfo = document.getElementById('PrjToDel');
  catNameinfo.innerHTML = '';
  categories.forEach((val) => {
    const option = document.createElement('option');
    option.innerHTML = val;
    option.setAttribute('value', val);
    catNameinfo.appendChild(option);
  });
  butDel.addEventListener('click', () => confDelCat());
  butEsc.addEventListener('click', () => escDelCat());
};

const confDelCat = function () {
  const navCategories = document.getElementById('navCategories');
  const catNameinfo = document.getElementById('PrjToDel').value;
  const child = document.getElementById(catNameinfo);
  if (confirm(`Are you sure to Remove ${catNameinfo}`)) {
    removeDataCat(catNameinfo, navCategories, child);
    escDelCat();
    const categories = getMyCategories();
    if (categories.length > 0) {
      const catName = categories[0];
      renderProjects(catName);
    } else {
      const bodyItem = document.getElementById('body-item');
      bodyItem.innerHTML = '';
    }
  }
};

function removeDataCat(catNameinfo, navCategories, child) {
  const categories = getMyCategories();
  navCategories.removeChild(child);
  categories.splice(categories.indexOf(catNameinfo), 1);
  setCategories(categories);
  const allToDo = getMyToDoList();
  // delete all to do associted to the project
  for (let i = allToDo.length - 1; i >= 0; i--) {
    if (allToDo[i].categorie === catNameinfo) {
      allToDo.splice(i, 1);
    }
  }
  setMyToDoList(allToDo);
}

function escDelCat() {
  const inputDiv = document.getElementById('winDelCat');
  inputDiv.style.display = 'none';
}
export default delCategorie;
