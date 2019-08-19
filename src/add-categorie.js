import createCategory from './create-cat';

const escCat = () => {
  const projectFom = document.getElementById('winCategory');
  projectFom.style.display = 'none';
};

const addCategory = function () {
  const projectFom = document.getElementById('winCategory');
  projectFom.style.display = 'block';
  const submitProject = document.getElementById('saveCat');
  const cancleProject = document.getElementById('escCat');
  submitProject.addEventListener('click', createCategory);
  cancleProject.addEventListener('click', escCat);
};
export default addCategory;
