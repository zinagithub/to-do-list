import { getMyCategories, getMyToDoList, setMyToDoList } from './local-storage';
import './style.css';

export default class Project {
  constructor(title, description, dueDate, priority, categorie) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.categorie = categorie;
  }


  renderProject(key) {
    const bodyItem = document.getElementById('body-item');

    if (document.getElementById('table') == null) {
      const table = document.createElement('table');
      table.id = 'table';
      bodyItem.appendChild(table);
      const row1 = document.createElement('tr');
      table.appendChild(row1);

      const col0 = document.createElement('td');
      col0.innerHTML = 'Priority';
      col0.style.borderBottom = '1px solid #900';
      row1.appendChild(col0);

      const col1 = document.createElement('td');
      col1.innerHTML = 'Title';
      col1.style.borderBottom = '1px solid #900';
      row1.appendChild(col1);

      const col2 = document.createElement('td');
      col2.innerHTML = 'Description';
      col2.style.borderBottom = '1px solid #900';
      row1.appendChild(col2);

      const col3 = document.createElement('td');
      col3.style.borderBottom = '1px solid #900';
      col3.innerHTML = 'Due Date';
      row1.appendChild(col3);

      const col4 = document.createElement('td');
      col4.innerHTML = '';
      row1.appendChild(col4);

      const col5 = document.createElement('td');
      col5.innerHTML = '';
      row1.appendChild(col5);
    } else {
      const table = document.getElementById('table');
    }

    const row2 = document.createElement('tr');
    row2.id = `${key.toString()}row2`;
    table.appendChild(row2);
    const col10 = document.createElement('td');
    col10.id = `${key.toString()}priority`;
    col10.innerHTML = this.priority;
    row2.appendChild(col10);

    const col11 = document.createElement('td');
    col11.id = `${key.toString()}title`;
    col11.innerHTML = this.title;
    row2.appendChild(col11);

    const col22 = document.createElement('td');
    col22.id = `${key.toString()}description`;
    col22.innerHTML = this.description;
    row2.appendChild(col22);


    const col33 = document.createElement('td');
    col33.id = `${key.toString()}dueDate`;
    col33.innerHTML = this.dueDate;
    row2.appendChild(col33);

    const col44 = document.createElement('td');
    col44.id = `${key}update`;
    col44.classList.add('update');
    col44.innerHTML = "<i class='fas fa-edit'></i>";
    row2.appendChild(col44);

    const col55 = document.createElement('td');
    col55.id = `${key}cut`;
    col55.classList.add('cut');
    col55.innerHTML = '<i class="fas fa-cut"></i>';
    row2.appendChild(col55);
  }

  editToDo(key) {
    const lastCat = this.categorie;
    const editDiv = document.getElementById('editDiv');
    editDiv.style.display = 'block';

    const title = document.getElementById('edTitle');
    title.innerHTML = this.title;
    title.value = this.title;

    const description = document.getElementById('edDescription');
    description.innerHTML = this.description;
    description.value = this.description;

    const priority = document.getElementById('edPriority');
    priority.value = this.priority;

    const edcategorie = document.getElementById('edCatNameinfo');
    edcategorie.innerHTML = '';
    const categories = getMyCategories();
    categories.forEach((val) => {
      const option = document.createElement('option');
      option.innerHTML = val;
      option.setAttribute('value', val);
      edcategorie.appendChild(option);
    });
    edcategorie.value = this.categorie;

    const dueDate = document.getElementById('edDateDue');
    dueDate.value = this.dueDate;
    const butSave = document.getElementById('editPrj');
    butSave.addEventListener('click', () => saveEdit(key, lastCat));
    const butEsc = document.getElementById('escEdPrj');
    butEsc.addEventListener('click', () => escEdit());
  }
}


function escEdit() {
  const editDiv = document.getElementById('editDiv');
  editDiv.style.display = 'none';
}

const saveEdit = (e, lastCat) => {
  if (document.getElementById('editDiv').style.display === 'block') {
    const editDiv = document.getElementById('editDiv');
    const title = document.getElementById('edTitle');
    const description = document.getElementById('edDescription');
    const priority = document.getElementById('edPriority');
    const categorie = document.getElementById('edCatNameinfo');
    const dueDate = document.getElementById('edDateDue');

    editDiv.style.display = 'none';

    const titleKey = document.getElementById(`${e.toString()}title`);
    titleKey.innerHTML = title.value;

    const descKey = document.getElementById(`${e.toString()}description`);
    descKey.innerHTML = description.value;


    const dateKey = document.getElementById(`${e.toString()}dueDate`);
    dateKey.innerHTML = dueDate.value;

    const priorKey = document.getElementById(`${e.toString()}priority`);
    priorKey.innerHTML = priority.value;

    // in the case of changing the name of project remove the to do from the project
    if (categorie.value !== lastCat) {
      const tdToDel = document.getElementById(`${e}cut`);
      tdToDel.parentNode.innerHTML = '';
    }
    saveEditData(e, title.value, description.value, dueDate.value, priority.value, categorie.value);
  }
  function saveEditData(ind, title, description, dueDate, priority, categorie) {
    const toDoArr = getMyToDoList();
    toDoArr[ind].title = title;
    toDoArr[ind].description = description;
    toDoArr[ind].dueDate = dueDate;
    toDoArr[ind].priority = priority;
    toDoArr[ind].categorie = categorie;
    setMyToDoList(toDoArr);
  }
};
