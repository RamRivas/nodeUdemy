const sumar = (a,b)=>{
	return `${a + b} Arrow Normal`;
}

const sumar2 = (a,b)=> `${a + b} Return Implícito`;

const sumar3 = (a,b)=>({
	suma: `${a + b} Objeto`
});

console.log(sumar(5,10));
console.log(sumar2(5,10));
console.log(sumar3(5,10));