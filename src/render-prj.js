import { setMyToDoList, getMyToDoList, getMyCategories } from './local-storage';


export const renderProjects = (catName) => {
  changeCatColor(catName);
  renderTabToDo(catName);
  delFunction();
  updateFunction();
};

export const changeCatColor = (catName) => {
  const categories = getMyCategories();
  categories.forEach((val) => {
    const elm = document.getElementById(val);
    elm.style.background = 'white';
    elm.style.color = 'black';
  });
  if (categories.length > 0) {
    const bt = document.getElementById(catName);
    bt.style.background = '#900';
    bt.style.color = 'white';
  }
};

const delFunction = () => {
  const allToDo = getMyToDoList();
  const delRowToDo = document.getElementsByClassName('cut');
  for (let i = 0; i < delRowToDo.length; i++) {
    const elmToCut = delRowToDo[i].id.toString().replace('cut', '');
    delRowToDo[i].addEventListener('click', () => {
      const tdToDel = document.getElementById(`${elmToCut}cut`);
      tdToDel.parentNode.innerHTML = '';
      allToDo.splice(elmToCut, 1);
      setMyToDoList(allToDo);
    });
  }
};

const updateFunction = () => {
  const allToDo = getMyToDoList();
  const updateRowToDo = document.getElementsByClassName('update');
  for (let i = 0; i < updateRowToDo.length; i++) {
    const elmToUpdate = updateRowToDo[i].id.toString().replace('update', '');
    updateRowToDo[i].addEventListener('click', () => {
      const toUpdate = allToDo[elmToUpdate];
      toUpdate.editToDo(elmToUpdate);
    });
  }
};

const renderTabToDo = (catName) => {
  const bodyItem = document.getElementById('body-item');
  bodyItem.innerHTML = null;
  const allToDo = getMyToDoList();
  allToDo.forEach((val, index) => {
    if (val.categorie === catName) {
      val.renderProject(index);
    }
  });
};
