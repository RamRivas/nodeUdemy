// setTimeout(() => {
// 	console.log("Hola mundo");
// }, 1000);

let counter = 0;

const getUsuarioByID = async (id, callback)=>{

	try{
		for(let i=0; i<10000000; i++){
			const promesa = new Promise(
				setTimeout(()=>{
					counter ++;
				}, 1500)
			);

			promesa();
		}

		callback(counter);
	}
	catch(err){
		console.log(err);
	}
}

getUsuarioByID(1, (cont)=>{
	console.log(cont);
})