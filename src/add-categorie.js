import createCategory from './create-cat.js';

const addCategory = function(){
	const projectFom = document.getElementById("winCategory");
	const but = document.getElementById("saveCat");
	projectFom.style.display = "block";
	const submitProject = document.getElementById('saveCat');
	const cancleProject = document.getElementById('escCat');
	submitProject.addEventListener('click', () => createCategory());
	cancleProject.addEventListener('click', () => escCat());
}

function escCat(){
	const projectFom = document.getElementById('winCategory');
	projectFom.style.display = "none";
}

export default addCategory;