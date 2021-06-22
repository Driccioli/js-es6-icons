const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const containerHTML = document.querySelector(".icons-content");
// Array delle checkbox 
const checks = document.getElementsByClassName("form-check-input");

// Genera tutte le card dei tipi approvati dai check
function generateCard(icon){
	const {name,prefix,family, type} = icon;
    containerHTML.innerHTML += `
    <div class="icon-card">
        <div class="icon-card-inner">
            <div class="icon ${type}">
                <i class="${family} ${prefix}${name}"></i>
                <br>
            </div>
            <div class="name">
                ${name}
            </div>
        </div>
    </div>
    `;
};

// Funzione che definisce gli elementi validi per il nuovo array 
function iconFilter(icon){
	if(icon.type==="animal" && checks[0].checked){
		return true;
	} else if(icon.type==="vegetable" && checks[1].checked){
		return true;
	}else if(icon.type==="user" && checks[2].checked){
		return true;
	}
	return false;
}
// Genera array filtrato per la prima volta. Mantiene i check salvati dal browser 
var filteredIcons= icons.filter(icon =>iconFilter(icon));
filteredIcons.forEach(icon=> {
	generateCard(icon);
});

// Crea un array filtrato ogni qualvolta un check viene cliccato
Array.from(checks).forEach(check =>{
	check.addEventListener("click", ()=>{
		containerHTML.innerHTML="";
		filteredIcons = icons.filter(icon =>iconFilter(icon));
	
		filteredIcons.forEach(icon=> {
			generateCard(icon);
		});
	});
});
