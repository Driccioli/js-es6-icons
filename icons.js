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

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const containerHTML = document.querySelector(".icons-content");
const checks = document.getElementsByClassName("form-check-input");

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
icons.forEach(icon =>{
	generateCard(icon);
});


Array.from(checks).forEach(check =>{
	check.addEventListener("click", ()=>{
		containerHTML.innerHTML="";
		const filteredIcons = icons.filter(icon =>{
			if(icon.type==="animal" && checks[0].checked){
				return true;
			} else if(icon.type==="vegetable" && checks[1].checked){
				return true;
			}else if(icon.type==="user" && checks[2].checked){
				return true;
			}
			return false;
			
		});
	
		filteredIcons.forEach(icon=> {
			generateCard(icon);
		});
	});
});


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

