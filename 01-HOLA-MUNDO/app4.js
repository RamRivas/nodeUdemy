const deadpool = {
	nombre: "Wade",
	apellido: "Wilson",
	poder: "Regeneracion",
	edad: 50,
	getNombre(){
		return `${this.nombre} ${this.apellido} ${this.poder}`
	}
};

// const imprimirHeroe = ({ nombre, apellido, poder, edad = 0 })=>{
// 	console.log(nombre, apellido, poder, edad);
// }

// imprimirHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Iron Man'];

const [ , , h3] = heroes;

console.log(h3);
